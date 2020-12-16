var express = require('express');

const StudentData = require('../modal/Student');

var studentRouter = express.Router();

var jwtToken = require('../routes/login').jwtTok;

studentRouter.use(express.json());



studentRouter.route("/")
.all((req,res,next) => {
    next();
})

.get((req,res,next) => {
  console.log(jwtToken);
    res.render("studentRegister", { title: 'Express'});
  })

  .post((req,res,next)=>{
     
    var item={
        
        studName:req.body.studName,
        regNumber:req.body.regNumber,
        sub1:req.body.sub1,
        sub2:req.body.sub2,
        sub3:req.body.sub3,
        total:req.body.total
    }
    var student=StudentData(item);
    student.save();
    res.redirect('/studentModify');
});

  module.exports = studentRouter;
  