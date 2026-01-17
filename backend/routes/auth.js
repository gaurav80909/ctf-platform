const express = require("express");
const router = express.Router();
const User = require("../models/User");

// REGISTER
router.post("/register", async (req,res)=>{
  const {name,email,phone,password} = req.body;

  // check existing user
  let user = await User.findOne({email});
  if(user) return res.json({success:false, message:"User already exists"});

  // save new user
  user = new User({name,email,phone,password});
  await user.save();

  res.json({success:true});
});

// LOGIN
router.post("/login", async (req,res)=>{
  const {email,password} = req.body;

  const user = await User.findOne({email,password});
  if(!user) return res.json({success:false});

  res.json({success:true, username:user.name});
});

module.exports = router;
