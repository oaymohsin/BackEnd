const Dotenv = require("dotenv").config;
// const path = require('path'); 
let MyEnvironment={};
if (process.env.NODE_ENV=='testing'){
    MyEnvironment=Dotenv.config({path:`${__dirname}/../application-testing-environment.env`});
}
if(process.env.NODE_ENV === 'development'){
    MyEnvironment = Dotenv.config({path:`${__dirname}/../application-development-environment.env`});
}

if(process.env.NODE_ENV === 'production'){
    MyEnvironment = Dotenv.config({path:`${__dirname}/../application-production-environment.env`});
}
console.log(MyEnvironment);