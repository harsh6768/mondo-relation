const Router=require('express').Router();
const companyController=require('../controllers/companyController');
const productController=require('../controllers/productController');


Router.route('/createCompany').post(companyController.createCompany);
Router.route('/getAllCompanyDetails').get(companyController.getAllCompanies);
Router.route('/getCompanyByName/:company_name').get(companyController.getCompanyByName);


Router.route('/createProduct').post(productController.createProduct);
Router.route('/getAllProducts').get(productController.getProducts);
Router.route('/getProductByName/:product_name').get(productController.getProductByName);


module.exports=Router;