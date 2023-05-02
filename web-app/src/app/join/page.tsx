'use client'

//https://api.github.com/users/morettipdr
import axios from "axios";
import { api } from "@/lib/axios";
import Link from "next/link";
import { useState } from "react";
import userContext from "../contexts/userContext"

interface JoinProps {
    count: number;
}

export default function Join(props: JoinProps) {    
    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    function handleChangeName(event: any) {
        setNameInput(event.target.value)
    }
    function handleChangeEmail(event: any) {
        setEmailInput(event.target.value)
    }
    function handleChangePassword(event: any) {
        setPasswordInput(event.target.value)
    }

    async function signUp(){
        if(nameInput == "" || emailInput == "" || passwordInput == ""){
            console.log("You must fill all the required fields");
        } else{
            await api.post("users/create", {
                name: nameInput,
                email: emailInput,
                password: passwordInput,
            }).catch(e => console.log(e))
            setEmailInput("")
            setPasswordInput("")
            setNameInput("")
        }
    }    

    return (
        <userContext.Provider value={emailInput}>
            <div className="mainContainer bg-landing w-screen h-screen flex flex-col justify-center items-center gap-3">
                <Link className="bg-black w-28" href="/"><button className="mt-5 ml-5 text-black font-bold shadow-2xl bg-whiteButtons rounded-3xl hover:bg-buttons transition-all duration-200 p-2 w-28 absolute left-0 top-0">HOME</button></Link>
                <p className="text-2xl text-white font-bold">CREATE YOUR ACCOUNT</p>
                <div className="inputs flex flex-col gap-4">
                    <input onChange={handleChangeName} type="text" placeholder="username" className="rounded-xl px-2 h-8 bg-slate-300" name="" id="" />
                    <input onChange={handleChangeEmail} type="email" className="rounded-xl px-2 h-8 bg-slate-300" placeholder="email" />
                    <input onChange={handleChangePassword} type="password" className="rounded-xl px-2 h-8 bg-slate-300" placeholder="password" />
                </div>
                <button onClick={signUp} className="text-black font-semibold text-lg hover:bg-black transition-all duration-200 hover:text-white bg-white w-28 rounded-2xl h-9">SIGN IN</button>
                <p>USERS: {props.count}</p>
            </div>
        </userContext.Provider>
    )
}

export async function getStaticProps() {
    const counter = await api.get("users/count")
    return {
        props: {
            count: counter.data
        }
    }
}
