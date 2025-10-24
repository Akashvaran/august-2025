import axios from 'axios'
import React, { useState,useEffect } from 'react'
// import {useNavigate} from 'react-router-dom'

export const Home = () => {
  const[data,setData]=useState([]);

  // const navicate=useNavigate();

  // setTimeout(() => {
  //   navicate('/service')
  // }, 10000);

const getdata= async()=>{
   const responce=await axios.get('https://fakestoreapi.com/products');
    console.log(responce);
    setData(responce.data)
}

// async function getdata(){
//    const responce=await axios.get('https://fakestoreapi.com/products');
//     console.log(responce);
//     setData(responce.data)
// }
  useEffect(() => {
  getdata()
  }, [])
  

  // getdata()

  return (
    <>
      {data.map((value,index)=>(
        <div key={index}>
          <h1>{value.title}</h1>
          <img src={value.image} alt="" />
          <p>{value.category}</p>
          <p>{value.description}</p>
          <p>{value.price}</p>
        </div>
      ))}
    
    
    </>
  )
}
