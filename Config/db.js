const mongoose=require('mongoose');
require("dotenv").config()

const dbconnect=async()=>{
await mongoose.connect(process.env.db)
console.log("conneted");
}

module.exports=dbconnect