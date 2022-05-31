import React, { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";


const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [authState, setAuthState] = useState({});
    const [fetchCompleted, setFetchCompleted] = useState(false)

    useEffect(() => {
        axios.get("/api/auth/user")
            .then((res) => {
                if (res.data.token) {
                    const user = JSON.parse(window.localStorage.getItem("user"));
                    axios.get(`/api/user/${user.username}`)
                    .then((response) => {
                        setAuthState({ token: res.data.token, user: response.data });
                        window.localStorage.setItem("user", JSON.stringify(response.data))
                        setFetchCompleted(true);
                    })
                    .catch((err) => console.log(err))
                }else {
                    setFetchCompleted(true);
                }
            })
            .catch((err) => console.log(err))

    }, [])

    const isAuthenticated = () => {
        if (authState.token) {
            return true;
        } else {
            return false;
        }
    }


    return (
        <AuthContext.Provider value={{ authState, isAuthenticated, setAuthNewState: (value) => setAuthState(value), fetchCompleted }}>
            {children}
        </AuthContext.Provider>
    )
}


export { AuthProvider, AuthContext }