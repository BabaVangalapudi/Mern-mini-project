const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const RegisterModel = require("./models/register")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017")

app.post('/login',(req,res)=>{
    const {username, password} = req.body
    RegisterModel.findOne({username: username})
    .then(user =>{
        if (user) {
            if (user.password === password){
                res.json("Success")
            }else{
                res.json("The password is Incorrect")
            }
        }else{
            res.json("No records found")
        }
    })
})

app.post("/",(req,res)=>{
    RegisterModel.create(req.body)
    .then(registrations => res.json(registrations))
    .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("server is running")
})