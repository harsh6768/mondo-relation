const Company=require('../model/CompanySchema');

let createCompany=(req,res)=>{

   const {name,street,phone}=req.body;

   console.log(name,street,phone);

   let company=Company({
       name,
       street,
       phone
   });

   try{
 
      company.save()
      .then(result=>{
          
           res.send({
               status:200,
               data:result,
               message:'Company Added Successfully!!!'
           })
      })
      .catch(err=>{
          res.send({
              status:400,
              data:err,
              message:'Error occured'
          })
      })

   }catch(err){
       throw err;
   }


}

let getAllCompanies=(req,res)=>{

    Company.find()
    .then(companies=>{
        console.log(companies)
        res.send({
            status:200,
            data:companies,
            message:'All Companies'
        })
    })
    .catch(err=>{
        res.send({
            status:400,
            data:err,
            message:'Error occured'
        })
    })

}

let getCompanyByName=(req,res)=>{


    const company_name=req.params.company_name;
    
    Company.findOne({name:company_name})
    .then(company=>{
        
        res.send({
            status:200,
            data:company,
            message:'Company Details'
        });

    })
    .catch(err=>{

        res.send({
            status:400,
            data:err,
            message:'Failed to fetch the Company Details. Please try again!!!'
        })

    })
}

module.exports={
    createCompany,
    getAllCompanies,
    getCompanyByName
}