import React from 'react'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
function Addmodel() {
  return (
    <div>
        <div className="flex gap-4 items-center">
            <div className="relative">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='w-15 w-15 rounded-full'/>
            </div>
            <div className="text-2xl">Dummy user</div>
        </div>
        <div>
            <textarea cols={50} rows={5} placeholder='What do you want to say?' className='my-3 outline-0 text-xl p-2' name="post" id=""></textarea>
        </div>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQtr7GEmjJ9SYwMeX-fOc3MjJLIbuZqifUg&s" className='w-20 h-20 rounded-2xl' alt="" />
        </div>

        <div className='flex justify-between items-center'>
            <div className="my-2">
                <label htmlFor="inputFile" className="cursor-pointer"><InsertPhotoIcon/></label>
                <input type="file" name="photo" className='hidden' id="inputFile" />
            </div>
            <div className="bg-blue-950 text-white py-1 px-3 h-fit cursor-pointer rounded-2xl">
                Post
            </div>
        </div>
    </div>
  )
}

export default Addmodel