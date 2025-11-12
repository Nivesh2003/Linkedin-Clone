import React from 'react'

const Experiencemodal = () => {
    return (
        <div className="mt-8 w-full h-[350px] overflow-auto">
            <div className="w-full mb-4">
                <label htmlFor="">Role*</label>
                <br />
                <input type="text" className='p-2 mt-1 w-full border-1 rounded-md' placeholder='Enter role' />
            </div>
            <div className="w-full mb-4">
                <label htmlFor="">Company*</label>
                <br />
                <input type="text" className='p-2 mt-1 w-full border-1 rounded-md' placeholder='Enter company name' />
            </div>
            <div className="w-full mb-4">
                <label htmlFor="">Duration*</label>
                <br />
                <input type="text" className='p-2 mt-1 w-full border-1 rounded-md' placeholder='Enter duration' />
            </div>
            <div className="w-full mb-4">
                <label htmlFor="">Place*</label>
                <br />
                <input type="text" className='p-2 mt-1 w-full border-1 rounded-md' placeholder='Enter place' />
            </div>

                    <div className="bg-blue-900 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl">
            Save
        </div>
        </div>
    )
}

export default Experiencemodal