import React from 'react'

function Messagemodal() {
    return (
        <div className="my-5">
            <div className="w-full mb-4">
                <textarea name="" id="" className='p-2 mt-1 w-full border rounded-md' cols={20} rows={10} placeholder='Enter Message'></textarea>
            </div>

                    <div className="bg-blue-900 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl">
            Send
        </div>
        </div>
    )
}

export default Messagemodal