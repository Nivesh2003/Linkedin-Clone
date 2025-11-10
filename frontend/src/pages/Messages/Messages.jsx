import React from 'react'
import Card from '../../components/Cards/Card'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ImageIcon from '@mui/icons-material/Image';
import Conversation from './Conversation';
import Advertisement from '../../components/Cards/Advertisement';
function Messages() {
  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
        {/* Main */}
        <div className="w-full justify-between flex pt-5">
            {/* left s */}
            <div className="w-full md:w-[70%]">
                <Card padding={0}>
                    <div className="border-b-1 border-gray-300 px-5 py-2 font-semibold text-lg">
                        Messaging
                    </div>
                    <div className="border-b-1 border-gray-300 px-5 py-2">
                        <div className="py-1 px-3 cursor-pointer hover:bg-green-900 bg-green-800 font-semibold flex gap-2 w-fit rounded-2xl text-white">
                            Focused <ArrowDropDownIcon/>
                        </div>
                    </div>

                    {/* chat section */}
                    <div className="w-full md:flex">
                         <div className="h-[590px] overflow-auto w-full md:w-[40%] border-r-1 border-gray-400">
                            {/* Conversation */}
                            <Conversation/>
                         </div>

                         {/*  side chat area? */}
                         <div className="w-full md:w-[60%] border-gray-400">
                            <div className="border-gray-300 py-2 px-4 border-b-2 flex justify-between items-center">
                                <div>
                                    <p className='text-sm font-semibold'>User 1</p>
                                    <p className='text-sm text-gray-400'>hi this is user1</p>
                                </div>
                                <div><MoreHorizIcon/></div>
                            </div>

                            <div className="h-[360px] w-full overflow-auto border-b-1 border-gray-300">
                                <div className="w-full border-b-1 border-gray-300 p-4 gap-3">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_JmafxKbli9Es5QUvL6d-qIdOd5RmExsvA&s" className='rounded-[100%] cursor-pointer w-16 h-15' alt="" />
                                    <div className="my-2">
                                        <div className="text-md">User 1</div>
                                        <div className="text-sm text-gray-500">hi </div>
                                    </div>
                                </div>

                                {/* chat window */}
                                <div className="w-full">
                                    {/* for each message */}
                                    <div className="flex w-full cursor-pointer border-gray-300 gap-3 p-4">
                                        <div className='shrink-0'>
                                            <img className='w-8 h-8 rounded-[100%] cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_JmafxKbli9Es5QUvL6d-qIdOd5RmExsvA&s" alt="" />
                                        </div>
                                        <div className="mb-2 w-full">
                                            <div className="text-md">User 1</div>
                                            <div className="text-sm mt-6 hover:bg-gray-200 ">This is text msg</div>
                                            <div className='my-2'><img className='w-[240px] h-[180px] rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_JmafxKbli9Es5QUvL6d-qIdOd5RmExsvA&s" alt="" /></div>
                                        </div>
                                    </div>
                                    {/* for each message */}
                                    <div className="flex w-full cursor-pointer border-gray-300 gap-3 p-4">
                                        <div className='shrink-0'>
                                            <img className='w-8 h-8 rounded-[100%] cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_JmafxKbli9Es5QUvL6d-qIdOd5RmExsvA&s" alt="" />
                                        </div>
                                        <div className="mb-2 w-full">
                                            <div className="text-md">User 1</div>
                                            <div className="text-sm mt-6 hover:bg-gray-200 ">This is text msg</div>
                                            <div className='my-2'><img className='w-[240px] h-[180px] rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_JmafxKbli9Es5QUvL6d-qIdOd5RmExsvA&s" alt="" /></div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* space for typing messge */}
                            <div className="p-2 w-full flex justify-center border-b-1 border-gray-200">
                                <textarea rows={4} cols={60} className='bg-gray-200 outline-0 rounded-xl text-sm w:full p-3' placeholder='Write a message' id=""></textarea>
                            </div>

                            <div className="p-3 flex justify-between">
                                <div>
                                    <label htmlFor="messageImage" className='cursor-pointer'><ImageIcon/></label>
                                    <input id='messageImage' type="file"  className='hidden'/>
                                </div>
                                <div className="px-3 py-1 cursor-pointer rounded-2xl border-1 border-blue-800 text-blue-800 font-semibold hover:bg-blue-800 hover:text-white">Send</div>
                            </div>
                         </div>
                    </div>
                </Card>
            </div>
            {/* left e */}

            {/* Right side for advertise s*/}
            <div className="hidden md:flex md:w-[25%]">
                <div className="sticky top-19">
                    <Advertisement/>
                </div>
            </div>
            {/* Right side e*/}

        </div>
        {/* main ends */}
    </div>
  )
}

export default Messages