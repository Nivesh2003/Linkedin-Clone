const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {OAuth2Client} = require('google-auth-library');
const notifModel = require('../models/notification');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const cookieOptions = {
    httpOnly:true,
    secure:false, //Set true in prod
    sameSite:"Lax" //Set None in prod
}

//User registration function (using email and password)
exports.register = async(req,res) =>{
    try {
        let {email,password,f_name} = req.body;
        let isUserExist = await User.findOne({email})
        if(isUserExist){
           return res.status(400).json({error:"Already have an account with this email."})
        }
        //Secured password using bcrypt js
        const hashedPassword = await bcryptjs.hash(password,10);
        console.log(hashedPassword);
        
        const newUser = new User({email,password:hashedPassword,f_name});
        newUser.save();
        return res.status(201).json({message:"User registered successfully",success:"yes",data:User})
    } catch(err){
        console.error(err);
        res.status(500).json({error:"Server error"});
    }
}

// Registration or login via Google
exports.loginViaGoogle=async(req,res)=>{
    try {
        //frontend se token ayega
        const {token} = req.body;
        const ticket = await client.verifyIdToken({
            idToken:token,
            audience:process.env.GOOGLE_CLIENT_ID
        })
        const payload = ticket.getPayload();
        const {sub,email,name,picture} = payload;
        let userExists = await User.findOne({email});
        if (!userExists) {
            //Register new user
            userExists = await User.create({
                googleId:sub,
                email,
                f_name:name,
                profilePic:picture
            });
        } 
            let jwtToken = jwt.sign({userId:userExists._id},process.env.JWT_PRIVATE_KEY);
            res.cookie('token',jwtToken,cookieOptions)
        return res.status(200).json({user:userExists});
    } catch (error) {
        console.error(error);
        res.status(500).json({error:"Server error",message:error.message})
    }
}

//Login api
exports.login=async(req,res)=>{
    try{
        let{email,password} = req.body;
        const userExists = await User.findOne({email});
        if(userExists && await bcryptjs.compare(password,userExists.password)){
            //jwt authentication 
            let token = jwt.sign({userId:userExists._id},process.env.JWT_PRIVATE_KEY);
            res.cookie('token',token,cookieOptions)
            return res.json({message:"User logged in successfully",success:"true",userExists})
        } else {
            return res.status(400).json({error:"Invalid credentials"})
        }
    }catch(err){
        console.error(err);
        res.status(500).json({error:"Server error"});
    }
}

//LOG OUT API
exports.logout = async(req,res)=>{
    try{
        res.clearCookie('token',cookieOptions).json({message:"Logged out successfully"})
    }catch(err){
            console.error(err);
        res.status(500).json({error:"Server error"});
    }
}
//Update user api
exports.updateUser = async(req,res)=>{
    try {
        const {user} =req.body;
        const isExist = await User.findById(req.user._id);
        if(!isExist){
            return res.status(400).json({error:"User doesn't exists"});
        }
        const updateData = await User.findByIdAndUpdate(isExist._id,user);
        const userData = await User.findById(req.user._id).select("-password");
        res.status(200).json({
            message:"User updated!",
            user: userData
        })
    } catch (err) {
         console.error(err);
        res.status(500).json({error:"Server error"});
    }
}


//Profile details fetch api
exports.getUserById = async(req,res)=>{
    try{
        const {id} = req.params;
        const isExist = await User.findById(id);
        if(!isExist){
            return res.status(400).json({error:"No such User Exists"});
        }
        return res.status(200).json({
            message:"User fetched successfully",
            user:isExist
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" }); 
    }
}


//Finding users in search via debouncing
exports.findUser = async (req,res)=>{
    try{
        let {query} = req.query;
        const users = await User.find({
            $and:[
                {_id:{$ne:req.user._id}},
                {
                    $or:[
                        {f_name:{$regex:new RegExp(`^${query}`,'i')}},
                        {email:{$regex:new RegExp(`^${query}`,'i')}}
                    ]
                }
            ]
        })
        return res.status(201).json({
            message:"Fetched member",
            users:users
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" }); 
    }
}


//Sending friend request
exports.sendFriendRequest = async (req,res)=>{
    try{
        const sender = req.user._id;
        const {receiver} = req.body;
        const userExists = await User.findById(receiver);
        if(!userExists){
            return res.status(400).json({
                error:"No such user exist"
            })
        }
        const index = req.user.friends.findIndex(id=>id.equals(receiver));
        if(index!==-1){
            return res.status(400).json({
                error:"Already friend"
            });
        }
        const lastIndex = userExists.pendingRequests.findIndex(id=>id.equals(req.user._id));
        if(lastIndex!==-1){
            return res.status(400).json({
                error:"Already sent request"
            })
        }
        userExists.pendingRequests.push(sender); //Create a friend req

        //Create notification
        let content = `${req.user.f_name} has sent you friend request`;
        const notification = new notifModel({sender:sender,receiver:receiver,content,type:"friendRequest"})
        await notification.save();
        await userExists.save();
        return res.status(200).json({
            message:"Friend req sent"
        })
    }catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" }); 
    }
}

//Accepting friend req
exports.acceptFriendReq = async (req,res)=>{
    try {
        let {friendId} = req.body;
        let selfId = req.user._id;
        const friendData = await User.findById(friendId);
        if(!friendData){
            return res.status(400).json({
                error:"No such user exists"
            })
        }
        const index = req.user.pendingRequests.findIndex(id=>id.equals(friendId));
        if(index !== -1){
            req.user.pendingRequests.splice(index,1);
        } else {
            return res.status(400).json({
                error:"No such request from user"
            })
        }
        req.user.friends.push(friendId);
        friendData.friends.push(req.user._id);

        let content = `${req.user.f_name} has accepted your friend request`;
        const notification = new notifModel({sender:selfId,receiver:friendId,content,type:"friendRequest"})
        await notification.save();
        await friendData.save();
        await req.user.save();
        return res.status(200).json({
            message:"You both are now friends!"
        })
    }catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" }); 
    }
}

//Get friends list 
exports.getFriendsList = async (req,res)=>{
    try {
        let friendsList = await req.user.populate('friends');
        return res.status(200).json({
            friends:friendsList.friends //sirf friends list dega
        })
    }catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" }); 
    }
}

//Get pending friends list 
exports.getPendingList = async (req,res)=>{
    try {
        let pendingList = await req.user.populate('pendingRequests');
        return res.status(200).json({
            pendingList:pendingList.pendingRequests //sirf friends list dega
        })
    }catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" }); 
    }
}

//Remove friend
exports.removeFriend =  async (req,res)=>{
    try{
        let selfId = req.user._id;
        let {friendId} = req.params;
        const userExists = await User.findById(friendId);
        if(!userExists){
            return res.status(400).json({
                error:"No such user exists"
            })
        }
        //checking whether he/she is in friend list
        const index = req.user.friends.findIndex(id=>id.equals(friendId));
        const friendIndex = userExists.friends.findIndex(id=>id.equals(selfId));

        if(index !== -1){
            req.user.friends.splice(index,1);
        } else {
            return res.status(400).json({
                error:"No any request from such user"
            })
        }
        if(friendIndex !== -1){
            userExists.friends.splice(friendIndex,1);
        } else {
            return res.status(400).json({
                error:"No any request from such user"
            })
        }
        await req.user.save();
        await userExists.save();
        return res.status(200).json({
            message:"You both are disconnected now"
        })
        
    }catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" }); 
    }
}