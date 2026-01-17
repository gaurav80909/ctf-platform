const router = require("express").Router();
const Challenge = require("../models/Challenge");

// Get all challenges
router.get("/", async(req,res)=>{
  const data = await Challenge.find();
  res.json(data);
});

// Add challenge (Admin)
router.post("/add", async(req,res)=>{
  const ch = new Challenge(req.body);
  await ch.save();
  res.json("Challenge Added");
});

module.exports = router;
