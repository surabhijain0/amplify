# Amplify

## Overview

There's probably hundreds of apps on the internet that provide Spotify listening data, but generally they only list statistics such as your top artists or songs. What if you wanted more? What if you wanted to be able to search up an album and see your listening statistics for it? What if you wanted to see data on the song you're playing right now? That's where Amplify comes in. It is currently an ongoing project, but in the future it will include all of these features and more. 

## How to run Amplify

1. **Clone the repository**
Run the following command in order to clone the repository:
```bash
$ git clone https://github.com/surabhijain0/amplify
```

2. **Register a Spotify application**
Log in at the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/). Click *Create an App*, then fill in the form and click *Create*. Keep the client ID and client secret provided on hand; they will be necessary in just a moment.

3. **Set up environment variables**
Create a .env file in the project's root directory. Create a variable called `PORT` and set it to your preferred port. Then, create variables called `CLIENT_ID` and `CLIENT_SECRET` and set them to the provided client ID and client secret, respectively. 

4. **Install Node.js**
The appropriate installer can be downloaded here: [Node.js Download](https://nodejs.org/en/download/).

5. **Install the project dependencies**
Run the following commands from the project's root directory:
```bash
$ npm install
$ cd client
$ npm install
```

6. **Run the project**
While still in the client directory, run the following command:
```bash
$ npm start
```
Then navigate to the localhost port that you have set to see the project in action.