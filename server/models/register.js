const mongoose = require("mongoose")

const RegisterSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    confirmpass:String
})

const RegisterModel = mongoose.model("registraions", RegisterSchema)

module.exports = RegisterModel