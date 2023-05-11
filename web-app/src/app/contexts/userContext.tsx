'use client'

import { Dispatch, SetStateAction, createContext, useState } from "react";

interface IUserContext {
    userEmail: string;
    setUserEmail: Dispatch<SetStateAction<string>>;
}

export const userContext = createContext<IUserContext>({
    userEmail: "",
    setUserEmail: () => {},
})

export const AuthProvider = ({children} : any) => {
    const [userEmail, setUserEmail] = useState("");

    return (
        <userContext.Provider value={{userEmail, setUserEmail}}>
            {children}
        </userContext.Provider>
    )
}