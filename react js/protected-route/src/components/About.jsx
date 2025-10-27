import React, { useContext } from 'react'
import UserContext from '../routing/UserContext'

export const About = () => {
    const {email,password}=useContext(UserContext)
  return (
    <div>
        {email}
        {password}
    </div>
  )
}
