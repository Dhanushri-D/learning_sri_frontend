const express=require("express");
const complaintRoute=require("./Route/complaintRoute");
const cors = require("cors");
const app=express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    req.requestTimeOfHit = new Date().toLocaleString();
    next();
});
app.use((req, res, next) => {
    req.message = "hi";
    next();
});
app.use("/api/v1/complaints", complaintRoute);
module.exports=app;