var express = require('express');

const StudentData = require('../modal/Student');

var resultRouter = express.Router();

resultRouter.use(express.json());



resultRouter.route("/")
.all((req,res,next) => {
    next();
})

.get((req,res,next) => {
    StudentData.find().then((data)=>
    {
        console.log("hai")
        console.log(data);
res.render("result", { title: 'Express',
            data
});
})
  })

  module.exports = resultRouter;