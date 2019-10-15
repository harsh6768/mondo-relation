const mongoose=require('mongoose');


const CompanySchema=mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    street:{
        type:String,
        required:true
    },
    phone:{
        type:String
    }
    
})

module.exports=mongoose.model('company',CompanySchema,'company');