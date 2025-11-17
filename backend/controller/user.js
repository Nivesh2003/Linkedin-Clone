const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const cookieOptions = {
    httpOnly:true,
    secure:false, //Set true in prod
    sameSite:"Lax" //Set None in prod
}

//User registration function (using email and password)
exports.register = async(req,res) =>{
    try {
        console.log(req.body);
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
        const userExists = await User.findOne({email});
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