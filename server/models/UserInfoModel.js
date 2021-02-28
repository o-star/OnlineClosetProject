const mongoose = require('mongoose')
const Schema = mongoose.Schema

let UserSchema = new Schema({
    id: String,
    password: String
})

let UserInfoModel = mongoose.model('userinfo', UserSchema)

module.exports = UserInfoModel