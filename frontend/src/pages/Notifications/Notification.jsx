import React from 'react'
import Advertisement from '../../components/Cards/Advertisement'
import ProfileCard from '../../components/Cards/ProfileCard'
import Card from '../../components/Cards/Card'
function Notification() {
  return (
        <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
        {/* left side s */}
        <div className='w-[21%] sm:block sm:w-[23%] hidden py-5'>
            <div className="h-fit">
                <ProfileCard/>
            </div>
        </div>

        {/* middle side notifications */}
        <div className='w-[100%] py-5 sm:w-[50%]'>
            <Card padding={0}>
                <div className="w-full">
                    {/* for each notif */}
                    <div className={`border-b-1 cursor-pointer flex gap-4 items-center border-gray-300 p-3`}>
                        <img src="https://www.w3schools.com/howto/img_avatar.png" className='rounded-full cursor-pointer w-15 h-15' alt="" />
                        <div className="">Dummyhassentrsequest</div> 
                    </div>

                </div>
            </Card>
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

export default Notification