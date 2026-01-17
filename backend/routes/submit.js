const router = require("express").Router();
const Challenge = require("../models/Challenge");
const User = require("../models/User");

router.post("/", async(req,res)=>{
  const {userId, challengeId, flag} = req.body;

  const challenge = await Challenge.findById(challengeId);
  const user = await User.findById(userId);

  if(user.solvedChallenges.includes(challengeId))
    return res.json("Already Solved");

  if(flag === challenge.flag){
    user.score += challenge.points;
    user.solvedChallenges.push(challengeId);
    await user.save();
    return res.json("Correct Flag! Points Added");
  } else {
    return res.json("Wrong Flag");
  }
});

module.exports = router;
