const user = require("../Models/user")

const signup=async(req,res) => {
  let User= await user.create(req.body)
  res.status(201).send(User)
}

module.exports={signup}