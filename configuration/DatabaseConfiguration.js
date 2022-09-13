const Package=require('../package.json');
const mongoose=require('mongoose');


mongoose.connect(`${process.env.DATA_BASE_URI}`,{useNewUrlParser:true, useUnifitedTopology:true},(error,connection)=>{
    if(!error){
        console.log(`\nMongoDB Connected Successfully at MongoAtlas with Database E-commerce Database\n`);
        console.log("Your app has the following Dependencies\n");
        for(dependencies in Package.dependencies){
            console.log(dependencies);
        }
    }
    else { console.log('Error: Not Connected to the MongoDb' + error) }
})