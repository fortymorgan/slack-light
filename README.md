# Slack-light

This is a multichannel web-chat application for conversations.

[![Maintainability](https://api.codeclimate.com/v1/badges/cd6f3eca4964b433bf97/maintainability)](https://codeclimate.com/github/fortymorgan/project-lvl4-s259/maintainability)
[![Build Status](https://travis-ci.org/fortymorgan/slack-light.svg?branch=master)](https://travis-ci.org/fortymorgan/slack-light)

## How to use
Go to [app](https://slack-s259.herokuapp.com)

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
