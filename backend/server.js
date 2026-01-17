const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/mini_ctf")
.then(()=>console.log("MongoDB Connected"));

// Auth routes
app.use("/api", require("./routes/auth"));

app.listen(5000, ()=>console.log("Server running on 5000"));
