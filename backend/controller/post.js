const postModel = require('../models/post')

exports.addPost = async (req, res) => {
    try {
        const {desc,imageLink} = req.body;
        let userId = req.user._id;

        const addPost = new postModel({user:userId,desc,imageLink})
        if(!addPost){
            return res.status(400).json({error:"Something went wrong"});
        }
        await addPost.save()
        return res.status(200).json({
            message:"Post successful",
            post:addPost
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
}

//like dislike api
exports.likeDislikePost = async (req,res)=>{
    try{
        let selfId = req.user._id;
        let {postId} = req.body;
        let post = await postModel.findById(postId);
        if(!post){
            return res.status(400).json({error:"No such post found"});
        }
        //return 1 if a like is found (i.e user is in array of likes) else return -1
        const index = post.likes.findIndex(id=>id.equals(selfId));
        if(index!==-1){
            //already liked -> THEN DISLIKE
            post.likes.splice(index,1);
        } else {
            post.likes.push(selfId);
        }
        await post.save();
        res.status(200).json({
            message:index !== -1? "Post unliked" : "Post liked",
            likes:post.likes
        })
    }  catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
}


//Fetching all posts

exports.fetchPosts = async (req,res)=>{
    try {
        //Fetch latest posts first 
        let posts = await postModel.find().sort({createdAt:-1}).populate("user","-password");
        //.populate method will include the referenced user details too in posts
        return res.status(200).json({
            message:"Fetched data",
            posts:posts
        });
    } catch (err) {
               console.error(err);
        res.status(500).json({ error: "Server error" });
    }
}


//Fetching post by id api (only single post viewing)
exports.fetchPostById = async (req,res) => {
    try {
        const {postId} = req.params;
        const post = await postModel.findById(postId).populate("user","-password")
        if(!post){
            return res.status(400).json({error:"no post found"});
        }
        return res.status(200).json({
            message:"Fetched data",
            post:post
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({error:"Server error"})
    }
}


//Fetching top posts
exports.fetchTopPost= async (req,res)=>{
    try{
        const {userId} = req.params;
        const posts = await postModel.find({user:userId}).sort({createdAt:-1}).populate("user","-password").limit(5);
         return res.status(200).json({
            message:"Fetched data",
            posts:posts
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({error:"Server error"})
    }
}

//Fetching ALL posts for single user
exports.fetchAllPost= async (req,res)=>{
    try{
        const {userId} = req.params;
        const posts = await postModel.find({user:userId}).sort({createdAt:-1}).populate("user","-password");
         return res.status(200).json({
            message:"Fetched data",
            posts:posts
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({error:"Server error"})
    }
}