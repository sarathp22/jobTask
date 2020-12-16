var express = require('express');

const RegisterData = require('../modal/Register');

var registerRouter = express.Router();

registerRouter.use(express.json());



registerRouter.route("/")
.all((req,res,next) => {
    next();
})

.get((req,res,next) => {
    res.render("register", { title: 'Express' });
  })

  .post((req,res,next)=>{
    var item={
        email:req.body.email,
        password:req.body.password,
    }
    var signup=RegisterData(item);
    signup.save();
    res.redirect('/login');
});
  
  module.exports = registerRouter;
  