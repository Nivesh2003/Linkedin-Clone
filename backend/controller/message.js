const messageModel = require('../models/message')

//Send a message api
exports.sendMessage = async (req,res)=>{
    try{
        let {conversation,message,picture} = req.body;
        let addMessage = new messageModel({sender:req.user._id,conversation,message,picture});
        await addMessage.save();
        let populatedMessage = await addMessage.populate("sender");
        return res.status(201).json(populatedMessage);
    }catch(err){
        console.log(err);
         res.status(500).json({ error: "Server error", message: err.message });
    }
}

//Load messages
exports.loadMessages = async (req,res)=>{
    try{
        let {convoId} = req.params;
        let message = await messageModel.find({
            conversation:convoId
        }).populate("sender");
        return res.status(200).json({message:"Fetched message successfully",message})
    }catch(err){
        console.log(err);
         res.status(500).json({ error: "Server error", message: err.message });
    }
}