import Head from 'next/head'
import Avatar from '../components/Avatar'
import {MicrophoneIcon ,ViewGridIcon} from '@heroicons/react/solid'
import Image from "next/image";
import {SearchIcon} from '@heroicons/react/outline';
import Footer from '../components/Footer';
import {useRouter} from "next/router";
import {useRef} from "react";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e)=>{
      e.preventDefault();
      const term = searchInputRef.current.value
      if(!term) return;
      router.push(`/search?term=${term}`);

  };
  return (
    <div className="flex flex-col items-center justify-center h-screen" >
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className = "flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className = "flex space-x-4 items-center">
          <p className = "link">About</p>
          <p className = "link">Store</p>
        </div>
        {/* Right */}
        <div className = "flex space-x-4 items-center">
          <p className = "link">Gmail</p>
          <p className = "link">Images</p>
          {/* Icon */}
          <ViewGridIcon className ="h-10 w-10 p-2 rounded-full  hover:bg-gray-100 cursor-pointer" />

          {/* Avatar */}
          <Avatar url ="https://th.bing.com/th/id/R5807d80b2a081b64f4cfc9e1545311cb?rik=m8ELv94SlNjGhw&riu=http%3a%2f%2fwww.sarkarinaukrisearch.in%2fwp-content%2fuploads%2f2017%2f02%2fleave-me-alone-profile-pict.jpg&ehk=fiTV3y1W8Jx%2fTpU0Be39%2fl0FqZPT1vfnNVK%2b0aosYyw%3d&risl=&pid=ImgRaw"/>
        </div>
      </header>
      {/* Body */}
      <form className = "flex flex-col items-center mt-40 flex-grow w-4/5">
        <Image
        src = "https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        height ={100}
        width = {300} />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200
        px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl ">
          <SearchIcon className = "h-5 mr-3 text-gray-500"/>
          <input ref= {searchInputRef} type = "text" className = " flex-grow focus:outline-none"/>
          <MicrophoneIcon className = "h-5"/>

        </div>
        <div className ="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button  onClick = {search}className = "btn">Google Search</button>
          <button onClick = {search}className="btn">I'm feeling Lucky</button>
        </div>
      </form>
      {/* Footer */}
      <Footer/>

     
    </div>
  )
}
