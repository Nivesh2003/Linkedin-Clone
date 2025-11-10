import React from 'react'
import Card from './Card'

function Advertisement() {
    return (
        <div className='sticky top-18'>
            <Card padding={0}>
                <div className="relative h-25">
                    <div className="relative w-full h-22 rounded-md">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL_P5fFeF-3Bk3Qsw8ecIwKMLQcCm7rzPqsA&s" alt="" className='rounded-t-md h-full w-full' />
                    </div>

                    <div className="absolute top-14 left-[38%] z-10">
                        <img src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" alt="profile" className='rounded-4xl border-2 h-14 w-14 border-white cursor-pointer' />
                    </div>
                </div>

                <div className="px-5 my-5 mx-auto">
                    <div className="text-sm font-semibold text-center">Advertisement</div>
                    <div className="text-sm my-3 text-center">Get the latest jobs and updates</div>
                    <div className="text-sm my-1 border-1 text-center p-2 rounded-2xl font-bold border-blue-950 text-white bg-blue-800 cursor-pointer">
                        Learn More
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Advertisement