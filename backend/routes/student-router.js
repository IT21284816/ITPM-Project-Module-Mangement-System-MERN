const express=require("express");
const router = express.Router();
const students=require("../models/studSchema");
const ContactUs = require("../models/contactUsSchema"); // Import the ContactUs schema


//send data post method
router.post("/addstud", async (req, res) => {
    const {
      groupId, name, registrationNumber, email, contact,
      name2, registrationNumber2, email2, contact2,
      name3, registrationNumber3, email3, contact3,
      name4, registrationNumber4, email4, contact4,
      pTitle, pRArea, cosupervisor, supervisor
    } = req.body;
  
    if (!groupId||
        !name || !registrationNumber || !email || !contact ||
        !name2 || !registrationNumber2 || !email2 || !contact2 ||
        !name3 || !registrationNumber3 || !email3 || !contact3 ||
        !name4 || !registrationNumber4 || !email4 || !contact4 ||
        !pTitle || !pRArea || !cosupervisor || !supervisor) {
      res.status(422).json("Please fill up the Data");
      return; // Important to prevent further execution
    }
  
    try {
      const prestud = await students.findOne({ groupId: groupId });
      
  
      if (prestud) {
        res.status(422).json("This student is already present");
        return; // Important to prevent further execution
      }
  
      const addstudent = new students({
        groupId, name, registrationNumber, email, contact,
        name2, registrationNumber2, email2, contact2,
        name3, registrationNumber3, email3, contact3,
        name4, registrationNumber4, email4, contact4,
        pTitle, pRArea, cosupervisor, supervisor
      });
  
      await addstudent.save();
      res.status(201).json(addstudent);
    } catch (err) {
      res.status(422).json(err);
    }
  });
  

//get student Data
router.get("/getstud", async(req,res)=>{
    try{
        const studdata= await students.find();
        res.status(201).json(studdata);
    }catch(err){
        res.status(422).json(err)
    }
})

//get signle student Data
router.get("/getstud/:id", async(req,res)=>{
    try{
       const {id}=req.params;
       const singlestud=await students.findById({_id:id});
       res.status(201).json(singlestud);
    }catch(err){
        res.status(422).json(err);
    }
})


//Delete student Data
router.delete("/deletestud/:id", async(req,res)=>{
    try{
       const {id} = req.params;
       const deltestud=await students.findByIdAndDelete({_id:id});
       res.status(201).json(deltestud);
    }catch(err){
        res.status(422).json(err);
    }
})

// update student data
router.patch("/updatestud/:id",async(req,res)=>{
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

// Route to get a single contact form submission by ID
router.get("/getcontact/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const contact = await ContactUs.findById(id);
      if (!contact) {
        return res.status(404).json({ message: "Contact not found" });
      }
      res.status(200).json(contact);
    } catch (error) {
      res.status(500).json({ message: "Error fetching contact by ID", error });
    }
  });





// Send data post method ContactUS
router.post("/addcontact", async (req, res) => {
    const { name, registrationNumber, selection, message } = req.body;

    if (!name || !registrationNumber || !selection || !message) {
        return res.status(422).json("Please fill up all the fields");
    }

    try {
        const newContact = new ContactUs({
            name,
            registrationNumber,
            selection,
            message,
        });

        await newContact.save();
        res.status(201).json(newContact);
    } catch (err) {
        res.status(422).json(err);
    }
});

// Route to get all contact form submissions
router.get("/getcontacts", async (req, res) => {
  try {
    const contactList = await ContactUs.find();
    res.status(200).json(contactList);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contact list", error });
  }
});

// Route to get a single contact form submission by ID
router.get("/getcontact/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const contact = await ContactUs.findById(id);
        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: "Error fetching contact by ID", error });
    }
});

// Route to get a single contact form submission by ID
router.get("/addcontact/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const singlecontactus = await ContactUs.findById(id);
        if (!singlecontactus) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json(singlecontactus);
    } catch (err) {
        res.status(422).json(err);
    }
});

// Route to delete a single contact form submission by ID
router.delete("/deletecontact/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedContact = await ContactUs.findByIdAndDelete(id);
      if (!deletedContact) {
        return res.status(404).json({ message: "Contact not found" });
      }
      res.status(200).json({ message: "Contact deleted successfully", deletedContact });
    } catch (error) {
      res.status(500).json({ message: "Error deleting contact", error });
    }
  });
  






module.exports=router;