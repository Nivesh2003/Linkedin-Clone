import React from 'react'

const EditInfoModel = () => {
  return (
    <div className="mt-8 w-full h-[350px] overflow-auto">
        <div className="w-full mb-4">
            <label htmlFor="">Full name *</label>
            <br />
            <input type="text" className='p-2 mt-1 w-full border-1 rounded-md' placeholder='Enter full name'/>
        </div>

        <div className="w-full mb-4">
            <label htmlFor="">Headline *</label>
            <br />
            <textarea name="" id="" className='p-2 mt-1 w-full border-1 rounded-md' cols={10} row={3}></textarea>
        </div>

        <div className="w-full mb-4">
            <label htmlFor="">Current Company *</label>
            <br />
            <input type="text" className='p-2 mt-1 w-full border-1 rounded-md' placeholder='Enter full name'/>
        </div>

        <div className="w-full mb-4">
            <label htmlFor="">Current Location *</label>
            <br />
            <input type="text" className='p-2 mt-1 w-full border-1 rounded-md' placeholder='Enter full name'/>
        </div>

        <div className="bg-blue-900 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl">
            Save
        </div>
    </div>
  )
}

export default EditInfoModel