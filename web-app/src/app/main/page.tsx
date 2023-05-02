'use client'

import { useContext } from "react"
import userContext from "../contexts/userContext"

export default function Main(){
    const email = useContext(userContext)

    return (
        <h1 className="text-black">email: {email}</h1>
    )
}