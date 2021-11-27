const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    
    name:String,
    price:Number,
    quantity:{
        type:Number,
        default:1
    },
    description:{
        type:String,
        default:"good"
    },
    linkImg:{
        type:String
    }

})

module.exports = mongoose.model('Item',itemSchema)