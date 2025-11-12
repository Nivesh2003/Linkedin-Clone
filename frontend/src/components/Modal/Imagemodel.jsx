import React from 'react'

const Imagemodel = ({isCircular}) => {
  return (
    <div className="p-5 relative flex items-center flex-col h-full">
      {
        isCircular?(
          <img  className='rounded-full w-[150px] h-[150px]'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_JmafxKbli9Es5QUvL6d-qIdOd5RmExsvA&s" alt="" />
        ):(
          <img className='rounded-xl w-full h-[200px] object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL_P5fFeF-3Bk3Qsw8ecIwKMLQcCm7rzPqsA&s" alt="" />
        )
      }

      <label htmlFor="btn-upload" className='absolute bottom-10 left-0 p-3 bg-blue-900 text-white rounded-2xl cursor-pointer'>Upload</label>
      <input type="file" id='btn-upload' className='hidden'/>

      <div className='absolute bottom-10 right-0 p-3 bg-blue-900 text-white rounded-2xl cursor-pointer'>Submit</div>
    </div>
  )
}

export default Imagemodel