const express = require('express')
const route = express.Router();
const Authentication = require('../authentication/auth')
const commentController = require('../controller/comment')


route.post('/',Authentication.auth,commentController.commentPost)


route.get('/:postId',commentController.getAllComments)





module.exports = route;