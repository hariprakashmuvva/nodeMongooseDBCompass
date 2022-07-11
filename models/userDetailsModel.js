var mongoose = require('mongoose')

const UserdetailsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
    
})

module.exports = mongoose.model('UserData',UserdetailsSchema)