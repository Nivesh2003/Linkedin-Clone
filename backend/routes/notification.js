const express = require('express');
const route = express.Router();
const Authentication = require('../authentication/auth')
const notifController = require('../controller/notification')

//Get notifications
route.get('/',Authentication.auth,notifController.getNotifs);
route.get('/activenotification',Authentication.auth,notifController.activeNotif);

route.put('/isRead',Authentication.auth,notifController.updateRead)

module.exports = route;