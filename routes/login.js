var express = require('express');

const jwt= require('jsonwebtoken');

const RegisterData = require('../modal/Register');

var jwtToken; 

var loginRouter = express.Router();

loginRouter.use(express.json());

loginRouter.route("/")
.all((req,res,next) => {
    next();
})

.get((req,res,next) => {
    res.render("login", { title: 'Express' });
  })

  .post((req,res,next)=>{
    var user=req.body.email;
    var pass=req.body.password;
    RegisterData.findOne({email:user,password:pass},(err,i)=>{
        if(i)
        {
        if(i.email == user && i.password == pass)
        {
            let payload = { subject:i._id };
            let token = jwt.sign(payload, 'wonderfulllife');
            jwtToken = token;
            console.log("generated token is: " + token);
            res.redirect('/student');
        }
    }
    else{
        res.redirect('/login');
    }
        
       
    })
    // .then((data)=>{
    //     if(data.email == user && data.password == pass)
    //     {
    //         console.log(data._id);
    //         res.redirect('/student');
    //         // res.send({token});
            
            
            
           
    //     }
        
    // })
  
    // .catch(()=>{
    //                 var err="Wrong user name or password";
    //                 res.render('login',{
    //                     title:"Login"
    //                 });

    //                         });
});

  
  module.exports.login = loginRouter;
  module.exports.jwtTok = jwtToken;

  