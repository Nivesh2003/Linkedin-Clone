import React from 'react'
import Advertisement from '../../components/Cards/Advertisement'
function Resume() {
  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
       <div className='w-[100%] py-5 sm:w-[74%]'>
        <img  className="w-full h-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl6g1lSI1C3hgLJCR0n5xxW6U-qgAK1p-3xw&s" alt="" />
       </div>
       <div className="w-[26%] py-5 hidden md:block">
        <Advertisement />
       </div>
    </div>
  )
}

export default Resume