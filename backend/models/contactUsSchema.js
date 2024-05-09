const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactUsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    registrationNumber: {
        type: String,
        required: true
    },
    selection: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const ContactUs = mongoose.model("ContactUs", contactUsSchema);
module.exports = ContactUs;
