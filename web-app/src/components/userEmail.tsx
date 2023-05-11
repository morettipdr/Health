import { userContext } from "@/app/contexts/userContext"
import { useContext } from "react"

export default function UserEmail(){
    const {userEmail} = useContext(userContext)
    console.log(userEmail);

    return(
        <div className="bg-green-600 h-screen">
            <h1 className="text-white">email: {userEmail}</h1>
        </div>
    )
}