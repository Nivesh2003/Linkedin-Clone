import React from 'react'
import Card from '../../components/Cards/Card'

function Feeds() {
  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
        {/* left side s */}
        <div className='w-[21%] sm:block sm:w-[23%] hidden py-5'>
            <div className="h-fit">
                <Card/>
            </div>
        </div>

        {/* middle side s */}
        <div></div>

        {/* rigjt side s*/}
        <div></div>
    </div>
  )
}

export default Feeds