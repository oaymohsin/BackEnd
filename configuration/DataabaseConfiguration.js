const package=require('../package.json');
const mongoose=require('mongoose');


mongoose.connect(`${process.env.DATA_BASE_URI}`,{useNewUrlParser:true,useUnifiedTopology:true},(error,connection)=>{
    if(!error){
        console.log("Databaseconnectedsuccessfully");
        console.log("your app has following dependencies");
        for (deoendencies in package.dependencies){
            console.log(dependencies);
        }
    }
    else{
        console.log('Error: not connected to the database'+ error);
    }
})