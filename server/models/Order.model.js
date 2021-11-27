const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    
    cusname:String,
    email:{
        type:String,
        default:"cuongcuoi@gmail.com"
    },
    
    phone:{
        type:Number,
        default:9434343
    },
    address:{
        town:String,
        city:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    cart:[{
        type:Object
    }]

})

module.exports = mongoose.model('Order',orderSchema)