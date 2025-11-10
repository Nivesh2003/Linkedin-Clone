import React, { useState } from 'react'
import ProfileCard from '../../components/Cards/ProfileCard'

function Network() {
  const [text, setText] = useState("Catch up with friends")

  const handleFriends = () => {
    setText("Catch up with friends")
  }

  const handlePending = () => {
    setText("Pending requests")
  }

  return (
    <div className='px-5 xl:px-50 py-9 flex flex-col gap-5 w-full mt-5 bg-gray-100'>
      <div className="py-4 px-10 border border-gray-300 w-full flex justify-between items-center my-5 text-lg bg-white rounded-xl shadow-sm">
        
        {/* Left section text */}
        <div>{text}</div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleFriends}
            className={`px-3 py-1 text-sm border rounded-lg transition-all duration-200
              ${text === "Catch up with friends"
                ? "bg-blue-800 text-white border-blue-800"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
          >
            Friends
          </button>

          <button
            onClick={handlePending}
            className={`px-3 py-1 text-sm border rounded-lg transition-all duration-200
              ${text === "Pending requests"
                ? "bg-blue-800 text-white border-blue-800"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
          >
            Pending Requests
          </button>
        </div>
      </div>

      {/* friends cards section */}
      <div className="flex h-[80vh] w-full gap-7 flex-wrap items-start justify-center">
        <div className='md:w-[23%] h-[270px] sm:w-full'>
            <ProfileCard/>
            <ProfileCard/>
        </div>
      </div>
    </div>
  )
}

export default Network
