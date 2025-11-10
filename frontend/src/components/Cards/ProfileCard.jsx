import React from 'react'
import Card from './Card'

function ProfileCard() {
  return (
  <Card padding={0}>
    {/* images top */}
    <div className="relative h-25">
         <div className="relative w-full h-22 rounded-md">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL_P5fFeF-3Bk3Qsw8ecIwKMLQcCm7rzPqsA&s" alt=""  className='rounded-t-md h-full w-full'/>
         </div>

         <div className="absolute top-14 left-6 z-10">
            <img src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" alt="profile" className='rounded-4xl border-2 h-16 w-16 border-white cursor-pointer'/>
         </div>
    </div> 
    {/* images section end */}

    <div className="p-5">
         <div className="text-xl">Nivesh Chaudhary</div>
         <div className="text-sm my-1">Aspiring Full stack dev</div>
         <div className="text-sm my-1">Delhi NCR</div>
         <div className="text-sm my-1">-</div>
    </div>
  </Card>
  )
}

export default ProfileCard