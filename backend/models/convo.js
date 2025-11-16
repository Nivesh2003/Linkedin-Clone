const mongoose = require('mongoose')

const convoSchema = new mongoose.Schema({
    members:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref:'user'
        }
    ]
},{timestamps:true})

const convoModel = mongoose.model('convo',convoSchema);
module.exports = convoModel;