const express = require('express');
const route = express.Router();
const Auth = require('../authentication/auth');
const convoController = require('../controller/convo')

route.post('/add-conversation',Auth.auth,convoController.addConvo)

route.get('/get-conversations',Auth.auth,convoController.getConvo)

module.exports = route;
