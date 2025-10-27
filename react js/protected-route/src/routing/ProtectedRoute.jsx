import React from 'react'
import UserContext from './UserContext'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'



export const ProtectedRoute = ({children}) => {
     
    const {email,password} =useContext(UserContext)

    if(!(email=="akas@gmail.com"&&password=="akash@123")){
        return <Navigate to={'/'}/>
    }


    return children;

}
