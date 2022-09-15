const dotenv = require("dotenv");
// const path = require('path'); 
let MyEnvironment={};
if (process.env.NODE_ENV=='testing'){
    MyEnvironment=dotenv.config({path:`${__dirname}/../application-testing-environment.env`});
}
if(process.env.NODE_ENV === 'development'){
    MyEnvironment = dotenv.config({path:`${__dirname}/../application-development-environment.env`});
}

if(process.env.NODE_ENV === 'production'){
    MyEnvironment = dotenv.config({path:`${__dirname}/../application-production-environment.env`});
}
console.log(MyEnvironment);