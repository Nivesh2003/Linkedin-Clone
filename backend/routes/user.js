const express = require('express');
const userController = require('../controller/user')
const route = express.Router();

route.post('/register',userController.register);
route.post('/login',userController.login);
route.post('/google',userController.loginViaGoogle);






module.exports = route;

