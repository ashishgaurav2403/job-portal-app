const mongoose = require("mongoose");

dbconnect();

async function dbconnect(){
    try {
        await mongoose.connect('mongodb+srv://ashishgaurav2406:ashishgaurav2406@cluster0.ukyal.mongodb.net/job-portal-app', {useNewUrlParser:true})
        console.log('Mongo db connection success');
    } catch (error) {
        console.log('Mongo db connection failed');
    }
}

module.exports=mongoose;