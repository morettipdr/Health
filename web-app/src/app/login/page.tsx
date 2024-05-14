import user from "../../../public/image 2.png"
import lock from "../../../public/image 3.png"
import Image from "next/image"
import google from "../../../public/image 4.png"
import Home from "../page"
import Link from "next/link"

export default function Login () {
    return (
        <div className="box-border mainContainer w-screen h-screen flex text-white">
            <div className="welcomeText flex-1 h-screen bg-landing flex flex-col justify-center items-center gap-28 relative">
                <Link className="bg-black w-28" href="/"><button className="mt-5 ml-5 text-white font-bold shadow-2xl bg-buttons rounded-3xl hover:bg-green-950 transition-all duration-200 p-2 w-28 absolute left-0 top-0">HOME</button></Link>
                <h1 className="text-7xl font-semibold text-center"><span className="text-black">WELCOME<span/></span> BACK TO THE PLATFORM</h1>
                <h1 className="text-7xl font-semibold text-center">THAT'S THE <span className="text-black">NEXT STEP</span> TO BECOME HEALTHIER</h1>
            </div>
            <div className="loginInputs flex flex-col justify-center items-center w-2/5 gap-6 bg-whiteLogin h-screen">
                <p className="text-userLogin font-semibold text-2xl">ACCOUNT LOGIN</p>
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="inputs w-3/5 flex flex-col gap-8">
                        <div className="user relative flex items-center">
                            <input className="shadow-xl rounded-lg h-loginInput w-full focus:outline-buttons text-black pl-4" type="text" placeholder="username" name="" id="" />
                            <Image className="absolute right-0 m-2 object-contain h-4" src={user} alt="user"/>
                        </div> 
                        <div className="password relative flex items-center">
                            <input className="shadow-xl rounded-lg h-loginInput w-full focus:outline-buttons text-black pl-4" type="password" placeholder="password" name="" id="" />
                            <Image className="absolute right-0 m-2 object-contain h-4" src={lock} alt="user" />
                        </div>     
                    </div>
                    <div className="w-3/5 mainChecks text-right">
                        <button className="text-black text-sm">Forgot your password?</button>
                    </div>
                </div>
                <div>
                    <button className="bg-buttons shadow-xl transition-all duration-250 hover:bg-green-600 h-11 w-32 rounded-3xl text-xl font-medium">LOGIN</button>
                </div>
                <div className="google flex items-center drop-shadow-2xl bg-bgGoogle h-11 w-3/5 p-5 rounded-xl mt-6">
                    <button className="text-googleSignIn flex items-center gap-5 font-semibold text-xl"><Image className="object-contain h-5" src={google} alt="google logo"/> Continue with Google</button>
                </div>
            </div>
        </div>
    )
}

// 1rem = 16px