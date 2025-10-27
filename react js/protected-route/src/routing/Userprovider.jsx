import React, { useState } from 'react'
import UserContext from './UserContext'

export const Userprovider = ({ children }) => {
    const [email] = useState("akash1@gmail.com");
    const [password] = useState("akash@123");
    return (
        <UserContext.Provider value={{ email, password }}>
            {children}
        </UserContext.Provider>
    )
}
