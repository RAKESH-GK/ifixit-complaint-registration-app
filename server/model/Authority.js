const mongoose = require("mongoose");

const AuthoritySchema = new mongoose.Schema({
    authid: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const Authority = mongoose.model("AUTHORITY", AuthoritySchema);
module.exports = Authority;