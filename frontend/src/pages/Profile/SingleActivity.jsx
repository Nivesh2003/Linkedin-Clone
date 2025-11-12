import React from 'react'
import ProfileCard from '../../components/Cards/ProfileCard'
import Card from '../../components/Cards/Card'
import Posts from '../Feeds/Posts'
import Advertisement from '../../components/Cards/Advertisement'

function SingleActivity() {
  return (
         <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
        {/* left side s */}
        <div className='w-[21%] sm:block sm:w-[23%] hidden py-5'>
            <div className="h-fit">
                <ProfileCard/>
            </div>
        </div>

        {/* middle side s */}
        <div className='w-[100%] py-5 sm:w-[50%]'>

                    <div className="my-2 flex flex col gap-2">
                        <div>
                            <Posts />
                        </div>
                    </div>

          </div>
        {/* middle end */}

        {/* rigjt side s*/}
        <div className='w-[26%] py-5 hidden md:block'>

            <div className="my-5 sticky top-18">
                <Advertisement/>
            </div>
        </div>

    </div>
  )
}

export default SingleActivity