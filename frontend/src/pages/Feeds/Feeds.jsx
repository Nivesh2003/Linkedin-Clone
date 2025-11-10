import React, { useState } from 'react'
import ProfileCard from '../../components/Cards/ProfileCard'
import Card from '../../components/Cards/Card'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import FeedIcon from '@mui/icons-material/Feed';
import Advertisement from '../../components/Cards/Advertisement';
import Posts from './Posts';
import Modal from '../../components/Modal/Modal';
import Addmodel from '../../components/Modal/Addmodel';
function Feeds() {
    const [addPostModal, setAddPostModal] = useState(false);
    const handleOpenAddPostModal=()=>{
        setAddPostModal(!addPostModal);
    }
  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
        {/* left side s */}
        <div className='w-[21%] sm:block sm:w-[23%] hidden py-5'>
            <div className="h-fit">
                <ProfileCard/>
            </div>
            <div className="w-full my-5">
                <Card padding={1}>
                    <div className="w-full flex justify-between">
                        <div>Profile Viewers</div>
                        <div className="text-blue-900">23</div>
                    </div>
                    <div className="w-full flex justify-between">
                        <div>Post Impressions</div>
                        <div className="text-blue-900">150</div>
                    </div>
                </Card>
            </div>
        </div>

        {/* middle side s */}
        <div className='w-[100%] py-5 sm:w-[50%]'>
            <div>
                {/* Start a post start */}
                <Card padding={1}>
                    <div className="flex gap-2 items-center">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" className="rounded-4xl w-13 h-13 border-2 border-white cursor-pointer"/>
                        <input onClick={()=>setAddPostModal(true)} type="text" placeholder="Start a post" className="w-full border-1 border-gray-300 rounded-full px-3 py-3 hover:bg-gray-100"/>
                    </div>

                    <div className="w-full flex mt-3">
                        <div onClick={()=>setAddPostModal(true)} className="flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100"><VideoCameraBackIcon sx={{color:'green'}}/>Video</div>
                        <div onClick={()=>setAddPostModal(true)} className="flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100"><InsertPhotoIcon sx={{color:'blue'}}/>Photo</div>
                        <div onClick={()=>setAddPostModal(true)} className="flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100"><FeedIcon sx={{color:'orange'}}/> Article</div>
                    </div>
                </Card>
            </div>
            {/* start post section end */}
            <div className="border-b-1 border-gray-400 w-[100%] my-5" />

            {/* Posts section */}
            <div className="w-full flex flex-col gap-5">
                <Posts/>
            </div>
            {/* Posts section */}
        </div>
        {/* middle end */}

        {/* rigjt side s*/}
        <div className='w-[26%] py-5 hidden md:block'>
            <div>
                <Card padding={1}>
                    <div className="text-xl">LinkedIn News</div>
                    <div className="text-gray-600">Top stories</div>
                    <div className="my-1">
                        <div className="text-md">AI reaches new heighhts</div>
                        <div className="text-xs text-gray-400">2h ago</div>
                    </div>
                    <div className="my-1">
                        <div className="text-md">AI reaches new heighhts</div>
                        <div className="text-xs text-gray-400">2h ago</div>
                    </div>
                </Card>
            </div>
            <div className="my-5 sticky top-18">
                <Advertisement/>
            </div>
        </div>
        { addPostModal &&
        <Modal closeModel={handleOpenAddPostModal}>
            <Addmodel/>
        </Modal> 
        }
    </div>
  )
}

export default Feeds