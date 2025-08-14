const mongoose = require("mongoose");

const connectdb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb connected");
    } catch(error){
        console.error("mongodb connections failed");
    }
};
module.exports = connectdb;

    