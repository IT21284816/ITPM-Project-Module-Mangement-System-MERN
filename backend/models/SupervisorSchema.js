const mongoose= require("mongoose");
const studSchema = new mongoose.Schema({
    groupNumber:{
        type:String,
        required:true
    },
    report01Student1:{type:String,required:true},
    report01Student2:{type:String,required:true},
    report01Student3:{type:String,required:true},
    report01Student4:{type:String,required:true},

    report01FeedStu1:{type:String,required:true},
    report01FeedStu2:{type:String,required:true},
    report01FeedStu3:{type:String,required:true},
    report01FeedStu4:{type:String,required:true},

    proposalStudent1:{type:String,required:true},
    proposalStudent2:{type:String,required:true},
    proposalStudent3:{type:String,required:true},
    proposalStudent4:{type:String,required:true},

    proposalFeedStu1:{type:String,required:true},
    proposalFeedStu2:{type:String,required:true},
    proposalFeedStu3:{type:String,required:true},
    proposalFeedStu4:{type:String,required:true},

    report02Student1:{type:String,required:true},
    report02Student2:{type:String,required:true},
    report02Student3:{type:String,required:true},
    report02Student4:{type:String,required:true},

    report02FeedStu1:{type:String,required:true},
    report02FeedStu2:{type:String,required:true},
    report02FeedStu3:{type:String,required:true},
    report02FeedStu4:{type:String,required:true},

    logBookStudent1:{type:String,required:true},
    logBookStudent2:{type:String,required:true},
    logBookStudent3:{type:String,required:true},
    logBookStudent4:{type:String,required:true},

    logBookFeedStu1:{type:String,required:true},
    logBookFeedStu2:{type:String,required:true},
    logBookFeedStu3:{type:String,required:true},
    logBookFeedStu4:{type:String,required:true},
    
    finalReportStu1:{type:String,required:true},
    finalReportStu2:{type:String,required:true},
    finalReportStu3:{type:String,required:true},
    finalReportStu4:{type:String,required:true},

    finalReportFeedStu1:{type:String,required:true},
    finalReportFeedStu2:{type:String,required:true},
    finalReportFeedStu3:{type:String,required:true},
    finalReportFeedStu4:{type:String,required:true},

   
});
const students=new mongoose.model("Supervisor",studSchema);
module.exports=students;
