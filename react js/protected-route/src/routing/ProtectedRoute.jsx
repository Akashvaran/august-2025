import React from 'react'
import UserContext from './UserContext'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'



export const ProtectedRoute = ({children}) => {

     
    const {isLogin} =useContext(UserContext)

    if(!isLogin){
        return <Navigate to={'/'}/>
    }


    return children;

}
