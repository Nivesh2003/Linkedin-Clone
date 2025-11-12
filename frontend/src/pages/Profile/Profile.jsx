import React, { useState } from 'react'
import Advertisement from '../../components/Cards/Advertisement'
import Card from '../../components/Cards/Card'
import Posts from '../../pages/Feeds/Posts'
import AddIcon from '@mui/icons-material/Add';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import EditIcon from '@mui/icons-material/Edit';
import Model from '../../components/Modal/Modal';
import Imagemodel from '../../components/Modal/Imagemodel';
import EditInfoModel from '../../components/Modal/EditInfoModel';
import Aboutmodal from '../../components/Modal/Aboutmodal';
import Experiencemodal from '../../components/Modal/Experiencemodal';
import Messagemodal from '../../components/Modal/Messagemodal';
function Profile() {
    const [imageSetModal,setImageSetModal]=useState(false);
    const [circularImage,setCircularImage]=useState(false);
    
    const [infoModel,setInfoModel]=useState(false);

    const [aboutModal,setAboutModal] = useState(false);

    const [experienceModal,setExperienceModal] = useState(false);

    const [messageModal,setMessageModal] = useState(false);

    const handleMessageModal=()=>{
        setMessageModal(!messageModal);
    }

    const handleExpModal = ()=>{
        setExperienceModal(!experienceModal);
    }

    const handleAboutModel = () =>{
        setAboutModal(!aboutModal);
    }

    const handleInfoModel=()=>{
        setInfoModel(!infoModel);
    }

    const handleImageSetModal=()=>{
        setImageSetModal(!imageSetModal);
    }
    const handleOnEditCover = () =>{
        setImageSetModal(true);
        setCircularImage(false);
    }
    const handleCircularImage=()=>{
        setCircularImage(true);
        setImageSetModal(true);
    }
  return (
    <div className="px-5 xl:px-50 py-5 mt-5 flex flex-col gap-5 w-full pt-12 bg-gray-100">
        <div className="flex justify-between gap-3">
            {/* left main */}
            <div className="w-full md:w-[70%]">
                {/* banner and details card */}
                <div>
                    <Card padding={0}>
                        <div className="w-full h-fit">
                            <div className="relative w-full h-[200px]">
                                <div onClick={handleOnEditCover} className="absolute cursor-pointer top-3 right-3 z-20 w-[35px] flex justify-center items-center h-[35px] rounded-full p-3 bg-white"><EditIcon sx={{color:'black'}}/></div>
                                <img className='w-full h-[200px] rounded-tr-lg rounded-tl-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL_P5fFeF-3Bk3Qsw8ecIwKMLQcCm7rzPqsA&s" alt="" />
                                <div onClick={handleCircularImage} className="absolute object-cover top-24 left-6 z-10">
                                    <img className='rounded-full border-2 border-white cursor-pointer w-35 h-35' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_JmafxKbli9Es5QUvL6d-qIdOd5RmExsvA&s" alt="" />
                                </div>
                            </div>

                            <div className="mt-10 relative px-8 py-2">
                                <div onClick={handleInfoModel} className="absolute top-0 right-3 z-20 w-[35px] flex justify-center items-center h-[35px] rounded-full p-3 bg-white cursor-pointer"><EditIcon sx={{color:'black'}}/></div>
                                <div className='w-full'>
                                    <div className='text-2xl font-semibold'>Dummy user</div>
                                    <div className='text-gray-700'>I am a dummy user</div>
                                    <div className="text-sm text-gray-500">Haridwar, Uttarakhand</div>
                                    <div className="text-md text-blue-800 w-fit cursor-pointer hover:underline">2 Connections</div>

                                    <div className="md:flex w-full justify-between">
                                        <div className='my-5 flex gap-5'>
                                            <div className="cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold">Open to</div>
                                            <div className="cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold">Share</div>
                                            <div className="cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold">Logout</div>
                                        </div>
                                        <div className='my-5 flex gap-5'>
                                            <div onClick={handleMessageModal} className="cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold">Message</div>
                                            <div className="cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold">Connect</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* about card */}
                <div className='mt-5'>
                    <Card padding={1}>
                        <div className="flex justify-between items-center">
                            <div className='text-xl'>About</div>
                            <div onClick={handleAboutModel} className="cursor-pointer "><EditIcon sx={{color:'black'}}/></div>
                        </div>
                        <div className='text-sm w-[80%] text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, cupiditate. Doloremque hic delectus iusto possimus repudiandae sunt deserunt neque, quo suscipit illo, atque eligendi impedit magnam voluptates facilis sed officia?</div>
                    </Card>
                </div>
                {/* skills card */}
                <div className="mt-5">
                    <Card padding={1}>
                       <div className="flex justify-between items-center">
                            <div className='text-xl'>Skills</div>
                            </div>
                            <div className="text-gray-700 text-md my-2 w-full flex gap-4 flex-wrap">
                                <div className="py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg">React JS</div>
                                <div className="py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg">React JS</div>
                                <div className="py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg">React JS</div>
                                <div className="py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg">React JS</div>
                            </div>
                    </Card>
                </div>

                {/* ACtivity card */}
                <div className="mt-5">
                    <Card padding={1}>
                       <div className="flex justify-between items-center">
                            <div className='text-xl'>Activities</div>
                        </div>
                        <div className="cursor-pointer px-3 py-1 w-fit border-1 rounded-4xl bg-green-800 text-white font-semibold">Posts</div>

                        {/* parent div for scrollable activities */}
                        <div className="overflow-x-auto my-2 flex gap-1 overflow-y-hidden w-full">
                            <div className='cursor-pointer shrink-0 w-[350px]'>
                                <Posts profile={1}/>
                            </div>
                            <div className='cursor-pointer shrink-0 w-[350px]'>
                                <Posts profile={1}/>
                            </div>
                            <div className='cursor-pointer shrink-0 w-[350px]'>
                                <Posts profile={1}/>
                            </div>
                        </div>

                        {/* show all posts btn */}
                        <div className="w-full flex justify-center items-center">
                            <div className="cursor-pointer p-2 rounded-xl cursor-pointer hover:bg-gray-300">Show all posts <ArrowRightAltIcon/></div>
                        </div>
                    </Card>
                </div>

                {/* experience card */}
                <div className="mt-5">
                    <Card padding={1}>
                    <div className="flex justify-between items-center">
                            <div className='text-xl'>Experience</div>
                            <div onClick={handleExpModal} className="cursor-pointer"><AddIcon/></div>
                        </div>
                        <div className="mt-5">
                            
                            {/* each experience -> */}
                            <div className="p-2 border-t-1 border-gray-300 flex justify-between">
                                <div>
                                    <div className="font-semibold text-lg">Software Developer</div>
                                    <div className="text-gray-700">XYZ Company</div>
                                    <div className="text-sm text-gray-500">Jan 2020 - Present . 4 yrs</div>
                                    <div className="text-sm text-gray-500">Location: Remote</div>
                                </div>
                                <div className="cursor-pointer"><EditIcon/></div>
                            </div>

                        </div>
                    </Card>
                </div>

            </div>

            {/* right side ad */}
            <div className="hidden md:flex md:w-[30%]">
                <div className="sticky top-19">
                    <Advertisement/>
                </div>
            </div>
        </div>

        {/* models rendering */}
        {imageSetModal &&
        <Model title='Upload Image' closeModel={handleImageSetModal}>
            <Imagemodel isCircular={circularImage}/>
        </Model> }

        {infoModel &&
        <Model title='Edit Info' closeModel={handleInfoModel}>
            <EditInfoModel/>
        </Model>
        }
        { aboutModal &&
        <Model title="Edit About" closeModel={handleAboutModel}>
            <Aboutmodal/>
        </Model> }

        {experienceModal &&
        <Model title="Edit experience" closeModel={handleExpModal}>
            <Experiencemodal/>
        </Model>
        }
        {messageModal &&
        <Model title="Send Message" closeModel={handleMessageModal}>
            <Messagemodal/>
        </Model>
        }
    </div>
  )
}

export default Profile