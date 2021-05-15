import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image"
import {useRouter} from "next/router";
import {useRef} from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = e =>{
        e.preventDefault();
        const term = searchInputRef.current.value;
        if(!term) return;
        router.push(`/search?term=${term}`);
    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center ">
            <Image src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            
            height= {40}
            width = {120}
            onClick={() => router.push("/")}
            className="cursor-pointer"/>
            <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full flex-grow shadow-lg max-w-3xl items-center">
                <input ref ={searchInputRef} className="flex-grow w-full focus:outline-none" type ="text"/>
                <XIcon className="h-7 sm:mr-3  text-gray-500  cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={()=>{searchInputRef.current.value =""}} />
                <MicrophoneIcon className ="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
                <SearchIcon className = "h-6 text-blue-500 hidden sm:inline-flex"/>
                <button hidden type="submit" onClick={search}> Search </button>
            </form>
          <Avatar className="ml-auto"  url ="https://th.bing.com/th/id/R5807d80b2a081b64f4cfc9e1545311cb?rik=m8ELv94SlNjGhw&riu=http%3a%2f%2fwww.sarkarinaukrisearch.in%2fwp-content%2fuploads%2f2017%2f02%2fleave-me-alone-profile-pict.jpg&ehk=fiTV3y1W8Jx%2fTpU0Be39%2fl0FqZPT1vfnNVK%2b0aosYyw%3d&risl=&pid=ImgRaw"/>
            
            </div>
            {/* HeaderOptions */}
           
            <HeaderOptions/>
        </header>
    )
}

export default Header
