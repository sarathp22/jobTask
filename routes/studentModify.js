var express = require('express');

const StudentData = require('../modal/Student');

var studentModifyRouter = express.Router();

studentModifyRouter.use(express.json());

studentModifyRouter.route("/")
.all((req,res,next) => {
    next();
})

.get((req,res,next) => {

    StudentData.find().then((data)=>
                        {
                            console.log("hai")
                            console.log(data);
    res.render("studentModify", { title: 'Express',
                                data
                    });
                 })
            })
           

            studentModifyRouter.route("/:studentId")
            .all((req,res,next) => {
                res.statusCode = 200;
                next();
            })
            .get( (req,res,next) => {
               var id = req.params.studentId;

               StudentData.findOne({_id:id}).then((data)=>
               {
                   console.log("hai")
                   console.log(data);
res.render("studentEdit", { title: 'Express',
                       data
           });
        })

            })
            


         
            




  
  module.exports = studentModifyRouter;
  