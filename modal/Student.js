const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentRegisteration',{ useNewUrlParser: true });
const Schema=mongoose.Schema;
const StudentSchema= new Schema ({
                        studName:String,
                        regNumber:String,
                        sub1:Number,
                        sub2:Number,
                        sub3:Number,
                        total:Number
})

var StudentData=mongoose.model('student',StudentSchema);
module.exports= StudentData;