const express = require('express');
const app = express();
const mongoose = require("mongoose");
const ejsMate= require("ejs-mate");
const artistRouter = require("./routes/artist");
const marketRouter = require("./routes/market"); 
const path = require("path");
const port = 8080;
const methodOverride = require("method-override");




// connect Mongo

const MongoUrl= "mongodb://127.0.0.1:27017/aakaar";

main()
    .then(()=>{
        console.log("connected to db"); 
    })
    .catch((err)=>{
        console.log(err);
    })

async function main(){
    await mongoose.connect(MongoUrl);
}





// middelware
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
// help express to to read static files like CSS/Images from a 'public' folder
app.use(express.static(path.join(__dirname, "public")));
app.engine('ejs',ejsMate);
app.use(express.urlencoded({ extended: true }));// read the data from database
app.use(methodOverride("_method")); 


app.get("/",(req,res)=>{
    res.send("Welcome to the Page Akkar")
})

app.use("/artist",artistRouter);
app.use("/marketplace",marketRouter);

app.listen(port,()=>{
    console.log("listening.......");
    
})