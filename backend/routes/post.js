const express = require('express');
const route = express.Router();
const Authentication = require('../authentication/auth')
const PostController = require('../controller/post')


route.post('/',Authentication.auth,PostController.addPost)
route.post('/likeDislike',Authentication.auth,PostController.likeDislikePost)


route.get('/fetchPosts',PostController.fetchPosts)
route.get('/fetchPostById/:postId',PostController.fetchPostById)
route.get('/fetchTopPost/:userId',PostController.fetchTopPost)
route.get('/fetchAllPost/:userId',PostController.fetchAllPost)




module.exports = route