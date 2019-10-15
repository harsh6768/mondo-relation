const mongoose=require('mongoose');


const ProductSchema=mongoose.Schema({

    code:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'company'
    }
})

module.exports=mongoose.model('product',ProductSchema,'product');