const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentRegisteration',{ useNewUrlParser: true });
const Schema=mongoose.Schema;
const RegisterSchema= new Schema ({
                        email:String,
                        password:String
})

var RegisterData=mongoose.model('register',RegisterSchema);
module.exports= RegisterData;