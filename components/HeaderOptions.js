import HeaderOption from "./HeaderOption"
import {
    DotsVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PhotographIcon,
    PlayIcon,
    SearchIcon,
} from "@heroicons/react/outline"

function HeadderOptions() {
    return (
        <div className="flex w-full text-gray-700
        justify-evenly text-sm lg:text-base lg-justify-start lg:space-x-36 lg:pl-43
        border-b-[1px]" >
            {/*Left Section  */}
            <div className="flex space-x-6 ">
                <HeaderOption Icon = {SearchIcon} title="All" selected />
                <HeaderOption Icon = {PhotographIcon} title="Images"  />
                <HeaderOption Icon = {PlayIcon} title="Videos"  />
                <HeaderOption Icon = {NewspaperIcon} title="News"  />
                <HeaderOption Icon = {MapIcon} title="Maps"  />
                <HeaderOption Icon = {DotsVerticalIcon} title="More"  />


            </div>
            {/* Right */}
        
        <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
        </div>
        </div>
    )
}

export default HeadderOptions
