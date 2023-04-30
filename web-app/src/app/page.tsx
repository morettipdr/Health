import Image from "next/image"
import woman from "../../public/woman.png"
import search from "../../public/search.png"
import Join from "@/app/join/page"
import Login from "@/app/login/page"
import Link from "next/link"

export default function Home () {
    return (
        <div className="m-0 p-0 h-screen w-screen overflow-hidden box-border flex flex-col gap-20 bg-landing">
          <div className="mt-3 navbar flex box-border items-center justify-between w-screen h-16">
            <label className=" w-64 ml-5 flex items-center relative" htmlFor="">   
              <input className="opacity-60 rounded-2xl w-full pl-4 shadow-lg h-9" type="search" name="" placeholder="Search" id="" />
              <button className="flex items-center justify-center"><Image src={search} alt="search icon" className="w-9 absolute right-0 pr-4 object-contain" /></button>
            </label>
            <div className="buttons mr-10 text-white  flex box-border gap-2">
              <Link className="w-28" href="/login"><button className="bg-buttons transition-all duration-250 hover:text-black hover:bg-white h-10 w-28 rounded-3xl">LOGIN</button></Link>
              <Link className="w-28" href="/join"><button className="bg-buttons transition-all duration-250 hover:text-black hover:bg-white h-10 w-28 rounded-3xl">JOIN</button></Link>
            </div>
          </div>
          <div className="main flex justify-center gap-20 h-5/6 w-screen flex-1">
            <div className="img h-full flex items-end relative">
              <Image className="h-full w-full object-contain" src={woman} alt="woman"/>
            </div>
            <div className="mainInfo flex flex-col items-center mt-28 gap-20 text-white">
              <div className="mainTitle flex items-center">
                <h1 className="font-extrabold text-7xl">READY TO GET HEALTHIER?</h1>
                </div>
              <div className="font-semibold asideInfos flex items-center flex-col gap-16">
                <h2 className="text-5xl text-center ">FIND THE <span className="text-black">BEST</span> HEALTH <br></br> PROFESSIONAL</h2>
                <button className="bg-white text-black hover:text-white hover:bg-buttons transition-all duration-250 h-12 w-28 tracking-widest rounded-3xl">FIND</button>
                <h2 className="text-5xl">BASED ON <span className="text-black">YOUR</span> PREFERENCES</h2>
              </div>
            </div>
          </div>
        </div>
      )
}