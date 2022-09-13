const express=require("express");

const LoadMyEnvironmentVariable=require('./configuration/LoadMyEnvironmentVariable');
const app=express();

// port=process.env.PORT;
app.listen(process.env.PORT,()=>{
    console.log(`your app is listed on port : ${process.env.PORT}`);
    console.log(process.env.NODE_ENV);
    // console.log(ports);
});
// console.log(port);
// // console.log(app);
// Database_URI="mongodb+srv://oaymohsin:<password>@ecommercedata.mbl75eq.mongodb.net/?retryWrites=true&w=majority";