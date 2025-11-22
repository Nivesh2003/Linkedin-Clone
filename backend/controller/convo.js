const convoModel = require('../models/convo')
const messageModel = require('../models/message')

exports.addConvo = async (req, res) => {
    try {
        let sender = req.user._id;
        let {receiverId,message} = req.body;
        let isConvoExist = await convoModel.findOne({
            members:{$all:[sender,receiverId]}
        });
        if(!isConvoExist){
            let newConvo = new convoModel({members:[sender,receiverId]})
            await newConvo.save();
            let addMessage = new messageModel({sender:req.user._id,conversation:newConvo._id,message});
            await addMessage.save();
        }else {
            let addMessage = new messageModel({sender:req.user._id,conversation:isConvoExist._id,message});
            await addMessage.save();
        }
        return res.status(200).json({message:"Message sent"});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
}


//Get all convos
exports.getConvo = async (req,res)=>{
    try{
       let loggedInId = req.user._id;
       let conversations = await convoModel.find({
        members:{$in:[loggedInId]}
       }).populate("members","-password").sort({createdAt: -1});
       return res.status(200).json({
        message:"Fetched successfully",
        conversations:conversations
       })
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
}


