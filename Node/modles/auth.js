
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchame = new Schema({
    name: {
        type:String
    },
    username: {
        type:String
    },
    email: {
        type:String
    },
    password: {
        type:String
    }})

    const User = mongoose.model('User', userSchame)
    module.export = User
    