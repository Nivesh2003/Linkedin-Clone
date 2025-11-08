import React from 'react'

function Navbar1() {
  return (
    <nav className='w-[100%] bg-gray-100 md:px-[90px] px-[20px] flex justify-between py-3 box-border'>
        {/* Left side */}
        <div className="flex justify-between">
            <div className="flex gap-0.8 items-center cursor-pointer">
                <h3 className="text-blue-800 font-bold text-3xl">
                    Linked
                </h3>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/500px-LinkedIn_logo_initials.png" alt="LinkedIn" className="w-7 h-7" />
            </div>
        </div>


        {/* Right side */}
        <div className="flex box-border md:gap-4 gap-2 justify-center items-center">
            <div className="md:px-3 md:py-2 box-border text-black rounded-3xl hover:bg-gray-200 cursor-pointer">
                Join now
            </div>
            <div className="px-3 py-2 box-border border-1 text-blue-800 border-blue-800 rounded-3xl  hover:bg-blue-50 cursor-pointer">
                Sign in
            </div>
        </div>
    </nav>
  )
}

export default Navbar1