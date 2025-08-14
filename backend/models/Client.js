const mongoose = require("mongoose");

const clientschema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    sector: {
        type: String,
        required:true
    },
    location: {
        type: String,
        required:true
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default:"active"
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model("Client", clientschema);