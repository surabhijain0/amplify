var dotenv = require('dotenv');
var express = require('express');
var request = require('request');

dotenv.config();

var router = express.Router();
const PORT = process.env.PORT || 3000;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const SCOPE = '';
const REDIRECT_URI = `http://localhost:${PORT}/auth/callback`;

router.get('/login', function(req, res) {
  res.redirect('https://accounts.spotify.com/authorize?' + 
  new URLSearchParams({
    'response_type': 'code',
    'client_id': CLIENT_ID,
    'scope': SCOPE,
    'redirect_uri': REDIRECT_URI
  }));
});

router.get('/callback', function(req, res) {
  var code = req.query.code || null;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code'
    },
    headers: {
      Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token,
        refresh_token = body.refresh_token;

      var options = {
        url: 'https://api.spotify.com/v1/me',
        headers: {
          Authorization: `Bearer ${access_token}`
        },
        json: true
      };

      request.get(options, function(error, response, body) {
        console.log(body);
      });

      
      res.redirect('/#' + 
        new URLSearchParams({
          'access_token': access_token,
          'refresh_token': refresh_token
        }));
    } else {
      res.redirect('/#' + 
        new URLSearchParams({
          'error': 'invalid_token'
        }));
    }
  });
});

router.get('/refresh_token', function(req, res) {
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});

module.exports = router;