const mongoose=require('mongoose');

let userSchema =new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    number:Number
})

let user=mongoose.model('User', userSchema)
module.exports=user