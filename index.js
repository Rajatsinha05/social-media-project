const express = require('express')
const dbconnect = require('./Config/db')
const userRouter = require('./Routes/user.routes')
const uirouter = require('./Routes/UI.routes')

require('dotenv').config()
const app = express()
app.use(express.json())

// port and env
let Port = process.env.port || 8080

// form  data
app.use(express.urlencoded({extended:true}))
//  views 
app.set('view engine', 'ejs')
app.set("views",__dirname+'/views')

// routes
app.use(uirouter)
app.use("/user",userRouter)

// server port 
app.listen(Port, () => {
  console.log(`server is running on port ${Port}`)
  dbconnect()
})
