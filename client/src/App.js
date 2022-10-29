import React, { Component } from 'react';
import './App.css';

class App extends Component {
  login() {
    return <a href="http://localhost:3000/auth/login"> Spotify OAuth flow </a>;
  }

  render() {
    return (
      <div className="App">
        <h1> Home </h1>
        <body>
          <p> Thank you for checking out Amplify! It is currently still being built. </p>
          { this.login() }
        </body>
      </div>
    );
  }
}

export default App;