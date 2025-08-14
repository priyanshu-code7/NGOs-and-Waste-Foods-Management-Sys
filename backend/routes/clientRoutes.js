const express = require("express");
const router = express.Router();
const Client = require("../models/Client");

//insert

router.post("/", async(req,res)=>{
    try {
        const client = new Client(req.body);
        await client.save();
        res.status(201).json(client);
    }
    catch(err) {
        res.status(401).json({error:err.message});
    }
});
//view
router.get("/", async(req,res)=>{
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    }
    catch(err) {
        res.status(400).json({error:err.message});
    }
});
//single view
router.get("/:id", async(req,res)=>{
    try {
        const client = await Client.findById(req.params.id);
        if(!client) return res.status(400).json({message:"client not found"});
        res.status(200).json(client);
    }
    catch(err) {
        res.status(400).json({error:err.message});
    }
});
//update
router.put("/:id", async(req,res)=>{
    try {
        const client = await Client.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!client) return res.status(400).json({message:"client not found"});
        res.status(200).json(client);
    }
    catch(err) {
        res.status(400).json({error:err.message});
    }
});
//delete
router.delete("/:id", async(req,res)=>{
    try {
        const client = await Client.findByIdAndDelete(req.params.id);
        if(!client) return res.status(400).json({message:"client not found"});
        res.json({message:"client deleted"});
    }
    catch(err) {
        res.status(400).json({error:err.message});
    }
});
module.exports = router;