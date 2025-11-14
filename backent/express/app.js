const express = require('express')
const mongoose=require('mongoose')

const app = express()
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/sept2025")
.then(()=>console.log("database is connected"))
.catch((err)=>console.log("database is not connected",err))

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    password:String
})

const userModel=mongoose.model("userCollection",userSchema);

app.post("/user",async(req,res)=>{
const {Name,Email,Password,Mobile}=req.body


 const newUser=await userModel.create({
        name:Name,
        email:Email,
        mobile:Mobile, 
        password:Password, 

    })
    res.status(201).json({
        msg:"user created successfully",
        // data:createdData
        data:newUser
    })
})

app.put("/update/:id",async(req,res)=>{
    const{id}=req.params
    const {Name,Email,Password,Mobile}=req.body;
    const updateData=await userModel.findByIdAndUpdate(
        id,
        {name:Name,email:Email,password:Password,mobile:Mobile},
        {new:true}
    )

    if(!updateData){
        return res.status(404).json({mag:"user not found"});
    }
    res.status(200).json({
        data:updateData,
        
    })
})



app.delete("/delete/:id",async(req,res)=>{
    console.log(req.params)
    const{id}=req.params;

    const deletedata=await userModel.findByIdAndDelete(id)

    if(!deletedata){
        return res.status(404).json({msg:"data not found"})
    }
    res.status(203).json({
        msg:"user removed successfully",
        data:deletedata
    })
})

app.get('/get',async(req,res)=>{

    const userdata=await userModel.find();

    if(!userdata){
        return res.status(404).json({
            msg:"data not found"
        })
    }

    res.status(200).json({
        msg:"user details",
        data:userdata
    })

})



app.listen(8000, () => {
    console.log("server is running");

})






// create user methods   
    // const newUser=userModel({
    //     name:req.body.Name,
    //     email:req.body.Email,
    //     mobile:req.body.Mobile, 
    //     password:req.body.Password, 

    // })

    // or
    // const {Name,Email,Password,Mobile}=req.body
    // const newUser=userModel({
    //     name:Name,
    //     email:Email,
    //     mobile:Mobile, 
    //     password:Password, 

    // })
    // const createdData=await newUser.save();
// or












// app.get("/",(req,res)=>{
//     res.send("hello my server is running using express js")
// })

// app.post("/user", (req, res) => {
//     const datas = req.body;
        
//     res.status(200).json({
//         data: datas,
//         message: "data received successfully"
//     })
// })
