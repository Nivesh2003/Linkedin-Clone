const express = require('express');
const userController = require('../controller/user')
const route = express.Router();
const Authentication = require('../authentication/auth')

route.post('/register',userController.register);
route.post('/login',userController.login);
route.post('/google',userController.loginViaGoogle);
route.post('/logout',Authentication.auth,userController.logout)

//phle auth middleware chlega if success then update function will execute
route.put('/update',Authentication.auth,userController.updateUser);

route.get('/user/:id',userController.getUserById)
route.get('/self',Authentication.auth,(req,res)=>{
    return res.status(200).json({
        user:req.user
    })
})



module.exports = route;

