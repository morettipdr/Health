import { userContext } from "@/app/contexts/userContext";
import { api } from "@/lib/axios";
import { useContext, useState } from "react";

export default function JoinInputs(){
    const {userEmail, setUserEmail} = useContext(userContext)
    const [nameInput, setNameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    function handleChangeName(event: any) {
        setNameInput(event.target.value)
    }
    function handleChangeEmail(event: any) {
        setUserEmail(event.target.value)
    }
    function handleChangePassword(event: any) {
        setPasswordInput(event.target.value)
    }

    return( 
        <div className="inputs flex flex-col gap-4">
            <input onChange={handleChangeName} type="text" placeholder="username" className="rounded-xl px-2 h-8 bg-slate-300" name="" id="" />
            <input onChange={handleChangeEmail} type="email" className="rounded-xl px-2 h-8 bg-slate-300" placeholder="email" />
            <p>email: {userEmail}</p>
            <input onChange={handleChangePassword} type="password" className="rounded-xl px-2 h-8 bg-slate-300" placeholder="password" />
        </div>
        
    )
}