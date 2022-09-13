const dotenv = require('dotenv');

let MyEnivornment={};
if (process.env.NODE_ENV=='testing'){
    MyEnivornment=dotenv.config({path:`${__dirname}/../application-testing-environment.env`});
}
if(process.env.NODE_ENV === 'development'){
    MyEnviorment = dotenv.config({path:`${__dirname}/../application-development-environment.env`});
}

if(process.env.NODE_ENV === 'production'){
    MyEnviorment = dotenv.config({path:`${__dirname}/../application-production-environment.env`});
}
console.log(MyEnivornment);