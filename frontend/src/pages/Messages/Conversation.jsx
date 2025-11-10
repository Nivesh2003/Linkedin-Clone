import React from 'react'

function Conversation() {
    return (
        <div className="flex items-center w-full cursor-pointer border-b-1 border-gray-300 gap-3 p-4 hover:bg-gray-200">
            <div className='shrink-0'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_JmafxKbli9Es5QUvL6d-qIdOd5RmExsvA&s" alt="" className='w-12 h-12 rounded-[100%] cursor-pointer' /></div>
            <div>
                <div className="text-md">Bunn2y</div>
                <div className="text-sm text-gray-500">Software Engineer</div>
            </div>
        </div>
    )
}

export default Conversation