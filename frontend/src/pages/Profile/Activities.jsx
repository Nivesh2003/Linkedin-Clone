import Advertisement from "../../components/Cards/Advertisement"
import Card from "../../components/Cards/Card";
import ProfileCard from "../../components/Cards/ProfileCard"
import { useParams } from "react-router-dom"
import Posts from "../Feeds/Posts";
function Activities() {
    const { id } = useParams();
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
            <div>
                <Card padding={1}>
                    <div className="text-xl">All Activity</div>
                    <div className="cursor-pointer w-fit p-2 border-1 rounded-4xl bg-green-800 my-2 text-white font-semibold">Posts</div>

                    <div className="my-2 flex flex-col gap-2">
                        <div>
                            <Posts/>
                        </div>
                        <div>
                            <Posts/>
                        </div>
                    </div>
                </Card>
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

export default Activities