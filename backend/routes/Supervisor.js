const express=require("express");
const router = express.Router();
const students=require("../models/SupervisorSchema");


//send data post method
router.post("/addreport", async (req, res) => {
    const {
            groupNumber, 
            report01Student1, report01Student2, report01Student3, report01Student4,
            report01FeedStu1, report01FeedStu2, report01FeedStu3, report01FeedStu4,
            proposalStudent1, proposalStudent2, proposalStudent3, proposalStudent4,  
            proposalFeedStu1, proposalFeedStu2, proposalFeedStu3, proposalFeedStu4, 
            report02Student1, report02Student2, report02Student3, report02Student4, 
            report02FeedStu1, report02FeedStu2, report02FeedStu3, report02FeedStu4, 
            logBookStudent1,  logBookStudent2, logBookStudent3, logBookStudent4, 
            logBookFeedStu1,  logBookFeedStu2, logBookFeedStu3, logBookFeedStu4, 
            finalReportStu1, finalReportStu2, finalReportStu3, finalReportStu4, 
            finalReportFeedStu1,  finalReportFeedStu2, finalReportFeedStu3, finalReportFeedStu4
    } = req.body;

    // Check if any required field is missing
    if (        
            !groupNumber ||
            !report01Student1 || 
            !report01FeedStu1 || 
            !proposalStudent1 || 
            !proposalFeedStu1 || 
            !report02Student1 || 
            !report02FeedStu1 || 
            !logBookStudent1 || 
            !logBookFeedStu1 || 
            !finalReportStu1 || 
            !finalReportFeedStu1
    ) {
        return res.status(422).json("Please fill up all the data.");
    }

    try {
        // Check if the student already exists based on groupNumber
        const prestud = await students.findOne({ groupNumber: groupNumber });

        if (prestud) {
            return res.status(422).json("This student is already present.");
        } else {
            const addstudent = new students({
                groupNumber, 
            report01Student1, report01Student2, report01Student3, report01Student4,
            report01FeedStu1, report01FeedStu2, report01FeedStu3, report01FeedStu4,
            proposalStudent1, proposalStudent2, proposalStudent3, proposalStudent4,  
            proposalFeedStu1, proposalFeedStu2, proposalFeedStu3, proposalFeedStu4, 
            report02Student1, report02Student2, report02Student3, report02Student4, 
            report02FeedStu1, report02FeedStu2, report02FeedStu3, report02FeedStu4, 
            logBookStudent1,  logBookStudent2, logBookStudent3, logBookStudent4, 
            logBookFeedStu1,  logBookFeedStu2, logBookFeedStu3, logBookFeedStu4, 
            finalReportStu1, finalReportStu2, finalReportStu3, finalReportStu4, 
            finalReportFeedStu1,  finalReportFeedStu2, finalReportFeedStu3, finalReportFeedStu4
            });

            await addstudent.save();
            return res.status(201).json(addstudent);
        }
    } catch (err) {
        return res.status(422).json(err);
    }
});


//get student Data
router.get("/getreport", async(req,res)=>{
    try{
        const studdata= await students.find();
        res.status(201).json(studdata);
    }catch(err){
        res.status(422).json(err)
    }
})

//get signle student Data
router.get("/getreport/:id", async(req,res)=>{
    try{
       const {id}=req.params;
       const singlestud=await students.findById({_id:id});
       res.status(201).json(singlestud);
    }catch(err){
        res.status(422).json(err);
    }
})


//Delete student Data
router.delete("/deletereport/:id", async(req,res)=>{
    try{
       const {id} = req.params;
       const deltestud=await students.findByIdAndDelete({_id:id});
       res.status(201).json(deltestud);
    }catch(err){
        res.status(422).json(err);
    }
})

// update student data
router.patch("/updatereport/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updatestud = await students.findByIdAndUpdate(id,req.body,{
            new:true
        });

        res.status(201).json(updatestud);

    } catch (error) {
        res.status(422).json(error);
    }
})
module.exports=router;