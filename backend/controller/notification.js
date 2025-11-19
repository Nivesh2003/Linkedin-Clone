const notifModel = require('../models/notification')

exports.getNotifs = async(req,res)=>{
    try {
        let ownId = req.user._id;
        let notifications = await notifModel.find({receiver:ownId}).sort({createdAt:-1}).populate("sender receiver");
        return res.status(200).json({
            message:"Notifications fetched successfully",
            notifications:notifications
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({error:"Server error",message:err.message});
    }
}

exports.activeNotif = async (req,res)=>{
try{
 let ownId = req.user._id;
 let notification = await notifModel.find({receiver:ownId,isRead:false});
 return res.status(200).json({
    message:"notifications number fetched",
    count:notification.length
 })

}catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error", message: err.message });
    }
}


exports.updateRead = async(req,res)=>{
    try {
        let {notifId} = req.body;
        const notification = await notifModel.findByIdAndUpdate(notifId,{isRead:true})
        if(!notification){
            return res.status(404).json({error:"Notification not found"});
        }
        return res.status(200).json({
            message:"Read notification"
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error", message: err.message });
    }
}