const Login = require('../models/Login');
class siteController {
    home(req,res){
      Login.find({},function (err,Login){
        if(!err) {
            res.json(Login);
        }else{
            res.status(400).json({error:'Lỗi'});}
        }); 
    
      }  
        // res.render('home');
    search(req,res){
        res.render('search');
    }

}
module.exports = new siteController;