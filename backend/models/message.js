const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    conversation:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'convo'
    },
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    message:{
        type:String,
    },
    picture:{
        type:String
    }
},{timestamps:true})

const messageModel = mongoose.model('message',messageSchema);
module.exports = messageModel;