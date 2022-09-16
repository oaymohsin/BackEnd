// const express=require("express");

// const LoadMyEnvironmentVariable=require('./configuration/LoadMyEnvironmentVariable');
// const DatabaseConfiguration=require('./configuration/DatabaseConfiguration');
// const app=express();

// port=process.env.PORT;

//Block Start Dependencies
const express=require('express');
const cors=require('cors');
const LoadMyEnvironmentVariables=require('./configuration/LoadMyEnvironmentVariable');
const DatabaseConfiguration=require('./configuration/DatabaseConfiguration');
//Block Start Dependencies

//Start Block initialize the app
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.text());
app.use(express.raw());
app.use(cors());
const PORT=process.env.PORT || 9990;
//Start Block initialize the app

//Start Block Setting the header for your Application
app.all('*',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Header','Origin,X-Requested-With,Content-Type,Accept,Authorization');
    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
    }
    next();
})
//Start Block Setting the header for your Application

//Start Block Accessing the Routes in the Entry point
const _AdminManagementRoute=require('./routes/AdminManagementRoute');
//Start Block Accessing the Routes in the Entry point

//Using Routes
app.use('/AdminManagement',_AdminManagementRoute);
//Using Routes

//Start Block Checking Routes as express not gound url not founded
app.use((req,res,next) => { 
    const error=new Error('URl not found');
});
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    })
});
//Start Block Checking Routes as express not gound url not founded



//Start Block for listening your app on defined port
app.listen(port,()=>{
    console.log(`your app is listed on port : ${port}`);
    console.log(process.env.NODE_ENV);
    // console.log(ports);
});
// console.log(port);
// // console.log(app);
// Database_URI="mongodb+srv://oaymohsin:<password>@ecommercedata.mbl75eq.mongodb.net/?retryWrites=true&w=majority";

//Start Block for listening your app on defined port
