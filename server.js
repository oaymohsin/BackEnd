const express=require("express");
const app=express();
const LoadMyEnvironmentVariable=require('./configuration/LoadMyEnvironmentVariable');
port=process.env.port;
app.listen(port,()=>{
    console.log(`your app is listed on port : ${port}`);
    console.log(process.env.NODE_ENV);
});
// console.log(app);
// Database_URI="mongodb+srv://oaymohsin:<password>@ecommercedata.mbl75eq.mongodb.net/?retryWrites=true&w=majority";