import React, { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";


const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [authState, setAuthState] = useState({})

    useEffect(() => {
        axios.get("/api/auth/user")
            .then((res) => {
                if (res.data.token) {
                    setAuthState({token: res.data.token})
                }
            })
            .catch((err) => console.log(err))

    }, [])

    const isAuthenticated = () => {
        if (authState.token) {
            return true;
        }else {
            return false;
        }
    }


    return(
        <AuthContext.Provider value={{authState, isAuthenticated, setAuthNewState: (value) => setAuthState(value) }}>
            {children}
        </AuthContext.Provider>
    )
}


export {AuthProvider, AuthContext}