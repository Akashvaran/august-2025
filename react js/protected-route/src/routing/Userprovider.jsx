import React, { useState } from 'react'
import UserContext from './UserContext'

export const Userprovider = ({ children }) => {
    const [databaseEmail] = useState("akash1@gmail.com");
    const [databasePassword] = useState("akash@123");
    const [isLogin, setIsLogin] = useState(false)

    const login = (email, password) => {
        if (email == databaseEmail && password == databasePassword) {
            setIsLogin(true)
        }

    }
    return (
        <UserContext.Provider value={{ isLogin, login }}>
            {children}
        </UserContext.Provider>
    )
}
