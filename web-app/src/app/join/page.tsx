//https://api.github.com/users/morettipdr
import { api } from "@/lib/axios";
import axios from "axios";

interface JoinProps {
    count: number;
}

export default function Join(props: JoinProps) {    
    return (
        <div className="mainContainer bg-landing w-screen h-screen flex flex-col justify-center items-center gap-3">
            <p className="text-2xl text-white font-bold">CREATE YOUR ACCOUNT</p>
            <div className="inputs flex flex-col gap-4">
                <input type="text" placeholder="username" className="rounded-xl px-2 h-8 bg-slate-300" name="" id="" />
                <input type="email" className="rounded-xl px-2 h-8 bg-slate-300" placeholder="email" />
                <input type="password" className="rounded-xl px-2 h-8 bg-slate-300" placeholder="password" />
            </div>
            <button className="text-black font-semibold text-lg hover:bg-black transition-all duration-200 hover:text-white bg-white w-28 rounded-2xl h-9">SIGN IN</button>
            <p>USERS: {props.count}</p>
        </div>
    )
}

export async function getServerSideProps(){
    const user = await api.get("users/count")    
    return {
        props: {
            count: user.data,
        }
    }
}

