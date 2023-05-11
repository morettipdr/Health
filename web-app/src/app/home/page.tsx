'use client'

import { useContext } from "react"
import { userContext, AuthProvider } from "../contexts/userContext"
import UserEmail from "@/components/userEmail"

export default function Main(){
    const {userEmail} = useContext(userContext)
    
    return (
        <AuthProvider>
            <UserEmail/>
        </AuthProvider>
    )
}