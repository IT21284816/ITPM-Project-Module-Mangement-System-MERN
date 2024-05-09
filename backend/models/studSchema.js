const mongoose= require("mongoose");
const studSchema = new mongoose.Schema({ 

    groupId:{
        type:String,
        required:true
    },

    pTitle:{
        type:String,
        required:true
    },
    pRArea:{
        type:String,
        required:true
    },
    cosupervisor:{
        type:String,
        required:true
    },
    supervisor:{
        type:String,
        required:true
    },
    
    
    name:{
        type:String,
        required:true
    },
    registrationNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },


    name2:{
        type:String,
        required:true
    },
    registrationNumber2:{
        type:String,
        required:true
    },
    email2:{
        type:String,
        required:true
    },
    contact2:{
        type:Number,
        required:true
    },


    name3:{
        type:String,
        required:true
    },
    registrationNumber3:{
        type:String,
        required:true
    },
    email3:{
        type:String,
        required:true
    },
    contact3:{
        type:Number,
        required:true
    },


    name4:{
        type:String,
        required:true
    },
    registrationNumber4:{
        type:String,
        required:true
    },
    email4:{
        type:String,
        required:true
    },
    contact4:{
        type:Number,
        required:true
    }


});
const students=new mongoose.model("students",studSchema);
module.exports=students;