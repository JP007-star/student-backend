const express =require('express')
const mongoose = require('mongoose')
const bodyParser=require('body-parser')

const path= require('path')
const cors = require('cors')
const app=express()
const env=require('dotenv')
const routes = require('./routes/student')


env.config()
app.use(bodyParser.json())  //express json


const uri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.nj4bnqt.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;
mongoose.connect(uri, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
}).then(() => {
    console.log("database  connected");
})


app.use(cors());
app.use('/',routes)

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
    
})