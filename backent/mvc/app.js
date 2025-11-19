const express=require('express')
const database = require('./config/database')
const userRouter = require('./routes/userRoute')
const cookieParser=require('cookie-parser')
const dotenv=require('dotenv')

dotenv.config()
const app=express()
app.use(express.json())
database()
app.use(cookieParser())


app.use('/user',userRouter)
// app.use('/product',userRouter)

app.listen(8000,()=>{
console.log("server is running")
})
