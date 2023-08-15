const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    problem: {
        type: String,
        required: true
    },
    proofimage: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    status:{
        type: String,
        default:"pending"
    }
});
const Complaint = mongoose.model("COMPLAINT", ComplaintSchema);
module.exports = Complaint;