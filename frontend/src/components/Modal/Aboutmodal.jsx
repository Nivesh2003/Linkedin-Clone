import React from 'react'

const Aboutmodal = () => {
    return (
        <div className="my-8">
            <div className="w-full mb-4">
                <label htmlFor="">About</label>
                <br />
                <textarea name="" id="" className='p-2 mt-1 w-full border-1 rounded-md' cols={10} row={3}></textarea>
            </div>
            <div className="w-full mb-4">
                <label htmlFor="">Skills (Add by seperating comma)</label>
                <br />
                <textarea name="" id="" className='p-2 mt-1 w-full border-1 rounded-md' cols={10} row={3}></textarea>
            </div>
            <div className="w-full mb-4">
                <label htmlFor="resumeUpload" className="p-2 bg-blue-800 text-white rounded-lg cursor-pointer">Resume Upload</label>
                <input type="file" name="" id="resumeUpload" className="hidden" />
                <div className="my-2">skjkd</div>
            </div>
            <div className="bg-blue-900 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl">
            Save
        </div>
        </div>
    )
}

export default Aboutmodal