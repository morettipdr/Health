'use client'

import Image from "next/image"
import woman from "../../public/woman.png"
import Link from "next/link"
import logo from "../../public/logo.svg"
import { AuthProvider } from "./contexts/userContext"

export default function Home () {
      return (
        <AuthProvider>
          <div className="m-0 p-0 h-threeScreen w-[100vw] overflow-x-hidden box-border flex flex-col bg-landing">
            <div className="firstScreen h-1/3 w-screen">
              <div className="mt-3 navbar flex box-border justify-between w-screen h-1/6">
                <div className="w-64 h-36 ml-5 relative">
                  <Image src={logo} alt="health+" className="h-full absolute left-0 top-0"/>
                </div>
                <div className="buttons mr-14 text-black mt-3 flex box-border gap-2">
                  <Link className="w-28 h-10" href="/login"><button className="drop-shadow-2xl font-semibold tracking-wider bg-whiteButtons transition-all duration-250 hover:text-white hover:bg-buttons h-10 w-28 rounded-3xl">LOGIN</button></Link>
                  <Link className="w-28 h-10" href="/join"><button className="drop-shadow-2xl font-semibold tracking-wider bg-whiteButtons transition-all duration-250 hover:text-white hover:bg-buttons h-10 w-28 rounded-3xl">JOIN</button></Link>
                </div>
              </div>
              <div className="main flex justify-center gap-20 w-screen h-5/6">
                <div className="img flex relative w-1/2">
                  <Image className="object-contain" src={woman} alt="woman"/>
                </div>
                <div className="mainInfo flex flex-col items-center mt-28 gap-20 w-2/3 text-white">
                  <div className="mainTitle flex items-center">
                    <h1 className="font-extrabold text-7xl">READY TO GET HEALTHIER?</h1>
                    </div>
                  <div className="font-semibold asideInfos flex items-center flex-col gap-16">
                    <h2 className="text-5xl text-center ">FIND THE <span className="text-black">BEST</span> HEALTH <br></br> PROFESSIONAL</h2>
                    <button className="bg-white text-black hover:text-white hover:bg-buttons transition-all duration-250 h-12 w-28 drop-shadow-2xl tracking-widest rounded-3xl">FIND</button>
                    <h2 className="text-5xl">BASED ON <span className="text-black">YOUR</span> PREFERENCES,</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="secondScreen h-1/3 w-screen">
              
            </div>
            <div className="thirdScreen h-1/3 w-screen">
            </div>
          </div>
        </AuthProvider>
      )
}
