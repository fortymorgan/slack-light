# Slack-light

Multichannel web-chat application.

[![Maintainability](https://api.codeclimate.com/v1/badges/cd6f3eca4964b433bf97/maintainability)](https://codeclimate.com/github/fortymorgan/project-lvl4-s259/maintainability)
[![Build Status](https://travis-ci.org/fortymorgan/slack-light.svg?branch=master)](https://travis-ci.org/fortymorgan/slack-light)

### Screenshots

#### Desktop
<img src="https://github.com/fortymorgan/slack-light/blob/master/screenshots/Desktop.png" alt="Desktop" title="Desktop version" />

#### Mobile
<img src="https://github.com/fortymorgan/slack-light/blob/master/screenshots/Mobile.png" width=320 alt="Mobile" title="Mobile version" />

## How to develop
To run the project locally first you need to install the dependencies:
```
npm install
```

Then run the app server with:
```
npm run dev-server
```
Based on the `NODE_ENV` variable, the server uses [koa-webpack](https://github.com/shellscape/koa-webpack) and builds the app automatically. Also the server watches source changes and re-builds the app when they happen.

The server listens to `http://localhost:4000`.  
(You can change the port number in `server/bin/slack.js`)

## How to deploy
First you need to install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
```
npm install -g heroku
```

Then create an account on [Heroku](https://heroku.com)

On [Heroku Dashboard](https://dashboard.heroku.com/apps) create new project.

In console run:
```
heroku login
```
and enter your user credentials.

Create new repository in your project directory with:
```
git init
```
Then add Heroku remote to it:
```
heroku git:remote -a *your_project_name*
```
Finally you need to commit code to the repository and push to Heroku Git:
```
git add .
git commit -m 'Initial commit`
git push heroku master
```
Your app will be deployed to `https://*your_project_name*.herokuapp.com`

## Testing

Tests are made with [Jest](https://github.com/facebook/jest)

Run tests with:
```
npm test
```
Jest snapshots for components tests in `__tests__/__snapshots__`.

## How to use
Open the [app](https://slack-s259.herokuapp.com)

### Username
It will be authomaticly generated on first visit and will be stored in cookies.  
App uses [Faker](https://github.com/marak/Faker.js/) for username generating, so don't be surprised of yours ;)

### Add channel
Click on "+ add channel" button on channels list, enter new channel name in modal window and click "Add".  
The channel will appear in the list and will be selected as current.

### Rename channel
Click on "pencil" icon of channel in the list, enter channel name in modal window and click "Rename".

### Delete channel
Click on "red cross" icon of channel in the list, then click "Yes" in modal window.  
If you delete current channel, first channel in list will be selected as current.
You can't delete first two channels in list. They are default.

## Built with
- [React](https://github.com/facebook/react) - web framework
- [Redux](https://github.com/reduxjs/redux) - app state container
- [Bootstrap](https://github.com/twbs/bootstrap) - style framework
- [Koa](https://github.com/koajs/koa) - HTTP middleware framework
- [Socket.IO](https://github.com/socketio/socket.io) - websocket framework
- [Axios](https://github.com/axios/axios) - promise based HTTP client
