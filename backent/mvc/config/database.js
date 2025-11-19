const mongoose=require('mongoose')

function database(){
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("database connected successfully"))
    .catch((err)=>console.log("database is not connected",err))
}

module.exports=database


