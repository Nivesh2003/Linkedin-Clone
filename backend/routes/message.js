const express = require('express');
const route = express.Router();
const Auth = require('../authentication/auth')
const messageController = require('../controller/message')


route.post('/',Auth.auth,messageController.sendMessage)

route.get('/:convoId',Auth.auth,messageController.loadMessages)

module.exports = route