const commentModel = require('../models/comment')
const postModel = require('../models/post')
const notifModel = require('../models/notification')

exports.commentPost = async (req,res)=>{
    try{
        const userId = req.user._id; //Auth middleware se ayegi
        const {postId,comment} = req.body;
        const postExist = await postModel.findById(postId).populate("user");
        if(!postExist){
            return res.status(400).json({error:"No such post found"});
        }
        postExist.comments = postExist.comments+1;
        await postExist.save();

        const newComment =  new commentModel({user:userId,post:postId,comment});
        await newComment.save();
        
        const populateComment = await commentModel.findById(newComment._id).populate('user','f_name headline profilePic');

        const content = `${req.user.f_name} has commented on your Post`;

        const notification =  new notifModel({sender:userId,receiver:postExist.user._id,content,type:"comment",postId:postId.toString()})
        notification.save();
        return res.status(200).json({
            message:"Commented successully",
            comment:populateComment
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({error:"Server error"})
    }
}

//Fetch comments all
exports.getAllComments = async (req,res)=>{
    try{
        const {postId} = req.params;
        const postExist = await postModel.findById(postId);
        if(!postExist){
            return res.status(400).json({
                error:"No such post found"
            })
        }
        const comments = (await commentModel.find({post:postId})).sort({createdAt:-1}).populate("user","f_name headline profilePic");
        return res.status(200).json({
            message:"Comments fetched successfully",
            comments:comments
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({error:"Server error"})
    }
}