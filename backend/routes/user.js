const express = require('express');
const userController = require('../controller/user')
const route = express.Router();

route.post('/register',userController.register);





module.exports = route;

