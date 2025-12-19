const dotenv=require("dotenv");
const mongoose=require("mongoose");
dotenv.config({path:"./config.env"});
const app=require("./index");
console.log(process.env.PORT_NO);
mongoose.connect(process.env.DB_URL)
    .then(()=>{
    console.log("DB started successfully");
    })
    .catch((err)=>{
        console.log(err);   
    })
app.listen(process.env.PORT_NO,()=>
{
    console.log("Server is running at port ",process.env.PORT_NO);
});