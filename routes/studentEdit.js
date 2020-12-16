var express = require('express');

const StudentData = require('../modal/Student');

var studentEditRouter = express.Router();

studentEditRouter.use(express.json());



studentEditRouter.route("/")
.all((req,res,next) => {
    next();
})

.get((req,res,next) => {
    res.render("register", { title: 'Express' });
  })

  .post((req,res,next)=>{
      var Id = req.body.id;
  
       var _studName = req.body.studName;
       var _regNumber = req.body.regNumber;
       var _sub1 = req.body.sub1;
       var _sub2 = req.body.sub2;
       var  _sub3 = req.body.sub3;
       var _total = req.body.total;
    
    StudentData .update({_id:Id},{$set:{studName:_studName,regNumber:_regNumber,sub1:_sub1,sub2:_sub2,sub3:_sub3,total:_total}},{multi:true})
                                   .then(()=>{
                                       res.redirect('/studentModify');
                                   })
})


studentEditRouter.route("/:studentId")
.all((req,res,next) => {
    res.statusCode = 200;
    next();
})
.get( (req,res,next) => {
   var id = req.params.studentId;

   StudentData.remove({_id:id}).then((data)=>
   {
    res.redirect('/studentModify');
});
})




  
  module.exports = studentEditRouter;
  