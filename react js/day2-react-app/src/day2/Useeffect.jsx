import React, { useState, useEffect } from 'react'
import { CiCircleMore } from "react-icons/ci";

// export const Useeffect = ({name,email,password,mobile}) => {
export const Useeffect = (a) => {
    const [count, setCount] = useState(0);
    const [countme, setCountme] = useState(0);


    //  useEffect(()=>{
    //     console.log("component is render")
    //  },[])

    useEffect(() => {
        console.log("component is render")
    }, [count,countme])

    // function apicall() {
    //     console.log("component is render")

    // }
    // apicall()

    const css={
        backgroundColor:"red",
        color:"white"
    }

    return (
        <>
        <CiCircleMore/>
            <h1 style={{backgroundColor:"red",color:"white"}}>{count}</h1>
            <h1>{countme}</h1>

            <button style={css} onClick={() => setCount(count + 0)}>click</button>
            <button onClick={() => setCountme(countme + 1)}>click me</button>

        {/* {name}
        {email}
        {password}
        {mobile} */}

        {a.name}
        {a.email}
        {a.password}
        {a.mobile}
        </>
    )
}

