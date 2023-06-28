const {Router}=require("express")
const user = require("../Models/user")
const { signup } = require("../Controllers/Usercontl")
const userRouter=Router()




userRouter.get('/test',(req,res)=>{
    res.status(200).send("router")
})
userRouter.post("/signup",signup)




module.exports=userRouter