import React, { useState } from 'react'
import './Navbar2.css'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link, useLocation } from 'react-router-dom';

function Navbar2() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const location=useLocation();
    return (
        <div className="bg-white h-13 flex justify-between py-1 px-5 xl:px-50 fixed top-0 w-[100%] z-1000">
            <div className="flex gap-2 items-center">
                <div>
                   <Link to={'/feeds'}><img className="w-8 h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/500px-LinkedIn_logo_initials.png" alt="" /> </Link>
                </div>
                {/* search bar s */}
                <div className='relative'>
                    <input className='searchInput w-70 bg-gray-100 rounded-sm h-10 px-4' placeholder='Search' />
                    {dropdownVisible && <div className='absolute w-88 left-0 bg-gray-200'>
                        <div className="flex gap-2 mb-1 items-center cursor-pointer">
                            <div><img className="w-10 h-10 rounded-full" src="" alt="" /></div>
                            <div>Nivesh</div>
                        </div>
                    </div>}
                </div>
                {/* search bar e */}
            </div>

            {/* right side strt */}
            <div className="hidden gap-10 md:flex">
            <Link to={'/feeds'}><div className="flex flex-col items-center cursor-pointer">
                    <HomeIcon sx={{color:location.pathname==='/feeds'?"black":"grey"}}/>
                   <div className={`text-sm text-gray-500 ${location.pathname==='/feeds'?"border-b-3":""}`}>Home</div>
                </div> </Link>
                <Link to={'/mynetwork'}>
                <div className="flex flex-col items-center cursor-pointer">
                    <GroupIcon sx={{color:location.pathname==='/mynetwork'?"black":"grey"}}/>
                    <div className={`text-sm text-gray-500 ${location.pathname==='/mynetwork'?"border-b-3":""}`}>My Network</div>
                </div>
                </Link>
                <Link to={'/resume'}>
                <div className="flex flex-col items-center cursor-pointer">
                    <WorkIcon sx={{color:location.pathname==='/resume'?"black":"grey"}}/>
                    <div className={`text-sm text-gray-500 ${location.pathname==='/resume'?"border-b-3":""}`}>Resume</div>
                </div>
                </Link>
                <Link to={'/message'}>
                <div className="flex flex-col items-center cursor-pointer">
                    <MessageIcon sx={{color:location.pathname==='/messages'?"black":"grey"}}/>
                    <div className={`text-sm text-gray-500 ${location.pathname==='/messages'?"border-b-3":""}`}>Message</div>
                </div>
                </Link>
                <div className="flex flex-col items-center cursor-pointer">
                    <div><NotificationsIcon sx={{color:location.pathname==='/notification'?"black":"grey"}}/> <span className='p-1 rounded-full text-sm bg-red-700 text-white'>1</span></div>
                    <div className={`text-sm text-gray-500 ${location.pathname==='/notification'?"border-b-3":""}`}>Notifications</div>
                </div>
                <Link to={'/profile/1'}>
                <div className="flex flex-col items-center cursor-pointer">
                    <img src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" alt="" className='rounded-full w-7 h-7'/>
                    <div className="text-sm text-gray-500">Me</div>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar2