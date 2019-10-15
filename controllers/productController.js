const Company=require('../model/CompanySchema');
const Product=require('../model/ProductSchema');

let createProduct=async(req,res)=>{

    const {code ,name,details,company}=req.body;

    let companyDetail=await Company.findOne({name:company});

    console.log(companyDetail);

    if(companyDetail){

        const product=Product({
            code,
            name,
            details,
            company:companyDetail._id
        });

        try{

           let productDetail=await product.save();

           if(productDetail){
                res.send({
                   status:200,
                   data:productDetail,
                   message:'Product Added Successfully!!!'
               })
           }else{
              res.send({
                  status:400,
                  message:'Failed to Add the Product. Please Try again!!!'
              })
           }

        }catch(err){
            throw err;
        }

    }else{
        
        res.send({
            status:400,
            message:`Company doesn't exist with provided company name.First of all register Company`
        })

    }
    
}

let getProducts=(req,res)=>{

    Product.find()
    .populate('company')  //here company is the name of the collection in mongodb  just like we use join in mysql
    .exec((err,products)=>{

        if(err){
            res.send({
                status:200,
                message:'Failed to Fetch the Products from the database'
            })
        }else{

            res.send({
                status:200,
                data:[products],
                message:'Products Detail'
            })
        }

    })
}

let getProductByName=async(req,res)=>{

    const product_name=req.params.product_name;

    try{

       let product=await Product.findOne({name:product_name});
       if(product){
           
            res.send({
               status:200,
               data:product,
               message:'Product Detail'
            });
       }else{

           res.send({
               status:400,
               message:'Failed to populate the Product.Please try again...'
           })
       }

    }catch(err){
        throw err;
    }

}

module.exports={
    
    createProduct,
    getProducts,
    getProductByName

}