const userModel = require("../model/userModel")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')



const generate=(id,email)=>{
return jwt.sign({id,email},process.env.PERSONALKEY,{expiresIn:"1h"})
}


const signup= async(req,res)=>{
    const {name,email,password}=req.body

    const userexist=await userModel.findOne({email})

    if(userexist){
        return res.status(400).json({
            message:"user already exist"
        })
    }
    const hashPassword=await bcrypt.hash(password,10)

    const createdData=await userModel.create({
        name:name,
        email:email,
        password:hashPassword
    })
    // console.log(createdData._id)
   const token= generate(createdData.id,createdData.email)

//    console.log(token)

   res.cookie("jwt",token,{maxAge:3600000,httpOnly:true})

    res.status(201).json({
        message:"user created successfully",
        data:createdData,
        token:token
    })
}

const login= async(req,res)=>{
    const{email,password}=req.body

    const existuser=await userModel.findOne({email})
    
    if(!existuser){
        return res.status(400).json({
            // message:"invalid credentials"
            message:"email not found"
        })
    }

    const passwordmatch=await bcrypt.compare(password,existuser.password)
    if(!passwordmatch){
        return res.status(400).json({
            // message:"invalid credentials"
            message:"password not match"
        })

    }

    // console.log(existuser.id)
     const token= generate(existuser.id,existuser.email)
      res.cookie("jwt",token,{maxAge:3600000,httpOnly:true})

    res.status(200).json({
        message:"login successfully",
        data:existuser,
        token:token
    })}


const logout=(req,res)=>{
    res.cookie("jwt","",{httpOnly:true})
    res.status(200).json({
        message:"logout successfully"
    })
}


module.exports={signup,login,logout}



// const getAlluser=(req,res)=>{

//     const userdata=userModel.find()
//     if(!userdata){
//         return res.status(400).json("data not fount")
//     }

//     res.status(200).json({
//         message:"user data",
//         data:userdata
//     })

// }