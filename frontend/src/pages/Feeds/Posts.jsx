import React, { useState } from 'react'
import Card from '../../components/Cards/Card'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
const Posts = (profile) => {
    const [seeMore, setSeeMore] = useState(false);
    const [loadComment, setLoadComment] = useState(false);
    const handleSendComment = (e) => {
        e.preventDefault();
    }
    const desc = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum mollitia quia sequi facere pariatur odit magnam, ipsa nulla quisquam expedita vero. Ullam molestiae laborum qui incidunt placeat, dicta beatae.`
  return (
    <Card padding={0}>
        {/* Name and img */}
        <div className='flex gap-3 p-4'>
            <div className="w-12 h-12 rounded-4xl">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="profile" className='rounded-4xl w-12 h-12 border-2 border-white cursor-pointer'/>
            </div>
            <div>
                <div className="text-lg font-semibold">Dummy User1</div>
                <div className="text-gray-400 text-xs">Software Developer @XYZ </div>
            </div>
        </div>
       
        {/* Post content */}
        <div className="text-md p-4 my-3 whitespace-pre-line flex-grow">
            {seeMore? desc : `${desc.slice(0,50)}...`} <span onClick={()=>setSeeMore(!seeMore)} className='cursor-pointer text-gray-500'>{seeMore?"See less":"See more"}</span>
        </div>

        <div className='w-[100%] h-[300px]'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQtr7GEmjJ9SYwMeX-fOc3MjJLIbuZqifUg&s" alt="" className='w-full h-full p-2'/>
        </div>

        <div className="my-2 p-4 flex justify-between items-center">
            <div className="flex gap-1 items-center">
                <ThumbUpIcon sx={{color:"blue",fontSize:12}}/> <div className='text-sm text-gray-600'> 1 Likes</div>
            </div>
            <div className="flex gap-1 items-center">
                 <div className='text-sm text-gray-600'> 2 Comments</div>
            </div>
        </div>

        {/* like comment buttons */}
        { !profile &&
        <div className="flex p-1">
            <div className="w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100">
                <ThumbUpIcon sx={{color:"blue",fontSize:22}}/> <span>Like</span>
            </div>
            <div onClick={()=>setLoadComment(!loadComment)} className="w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100">
                <CommentIcon sx={{fontSize:22}}/> <span>Comment</span>
            </div>
            <div className="w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100">
                <ShareIcon sx={{fontSize:22}}/> <span>Share</span>
            </div>
        </div> }

        {/* comments box */}
        { loadComment &&
        <div className="p-4 w-full">
            <div className="flex gap-2 items-center">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" className="rounded-full w-12 h-12 border-2 border-white cursor-pointer"/>
                <form onSubmit={handleSendComment} className='w-full flex gap-2'>
                <input type="text" placeholder="Add a comment..." className="w-full border-1 border-gray-300 rounded-3xl px-3 py-2 hover:bg-gray-100"/>
                <button type='submit' className='cursor-pointer bg-blue-800 text-white rounded-3xl py-1 px-3'>Send</button>
                </form>
            </div>

            {/* all coments box */}
            <div className="w-full p-4">
                <div className="my-4">
                    <div className="flex gap-3">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='rounded-full w-10 h-10 border-2 border-white cursor-pointer'/>
                        <div className='cursor-arrow'>
                            <div className='text-md'>Dummy user 2</div>
                            <div className='text-sm text-gray-500'>@NiveshBuilds</div>
                        </div>
                    </div>
                    <div className="px-11 my-2">Hi, great content</div>
                </div>
            </div>

        </div> }
    </Card>
  )
}

export default Posts