const mongoose = require('mongoose');


// password  me required true nhi h kyuki google se login krne pr password nhi milega
const userSchema = new mongoose.Schema({
    googleId: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: { 
    type: String 
    },
    f_name: {
        type: String,
        default:""
    },
    headline:{
        type: String,
        default:""
    },
    curr_company:{
        type: String,
        default:""
    },
    curr_location:{
        type: String,
        default:""
    },
    profilePic:{
        type: String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBIlg8Y5N3d8URs4sssUJd2e1Bn_KaJVX-g&s"
    },
    coverPic:{
        type: String,
        default:"https://wallpaperaccess.com/full/6060285.png"
    },
    about:{
        type: String,
        default:"",
    },
    skills:{
        type: [String],
        default:[],
    },
    resume:{
        type: String 
    },
    experience:[
        {
            designation: {type: String},
            company_name: {type: String},
            duration: {type: String},
            location: {type: String},
        }
    ],
    friends:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        }
    ],
    pendingRequests:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        }
    ], 
}, { timestamps: true }) 

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;