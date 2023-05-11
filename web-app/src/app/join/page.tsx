'use client'

//https://api.github.com/users/morettipdr
import { api } from "@/lib/axios";
import Link from "next/link";
import { useContext, useState } from "react";
import { AuthProvider, userContext } from "../contexts/userContext"
import JoinInputs from "@/components/JoinInputs";

interface JoinProps {
    count: number;
}

export default function Join(props: JoinProps) {
    const {userEmail} = useContext(userContext)


    // async function signUp(){
    //     if(nameInput == "" || userEmail == "" || passwordInput == ""){
    //         console.log("You must fill all the required fields");
    //     } else{
    //         await api.post("users/create", {
    //             name: nameInput,
    //             email: userEmail,
    //             password: passwordInput,
    //         }).catch(e => console.log(e))
    //         setPasswordInput("")
    //         setNameInput("")
    //     }
    // }
    

    return (
        <AuthProvider>
            <div className="mainContainer bg-landing w-screen h-screen flex flex-col justify-center items-center gap-3">
                <Link className="bg-black w-28" href="/"><button className="mt-5 ml-5 text-black font-bold shadow-2xl bg-whiteButtons rounded-3xl hover:bg-buttons transition-all duration-200 p-2 w-28 absolute left-0 top-0">HOME</button></Link>
                <p className="text-2xl text-white font-bold">CREATE YOUR ACCOUNT</p>
                <JoinInputs />
                {/* <button onClick={} className="text-black font-semibold text-lg hover:bg-black transition-all duration-200 hover:text-white bg-white w-28 rounded-2xl h-9">SIGN IN</button> */}
                <p className="text-white">USERS: {props.count}{userEmail}</p>
            </div>
        </AuthProvider>
    )
}

export async function getStaticProps() {
    const counter = await api.get("/users/count")
    
    return {
        props: {
            count: counter.data
        }
    }
}
