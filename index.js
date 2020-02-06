const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const enquiry = require('./enquiry');
const port=3001;



const app = express();
app.use(cors({
    origin:'http://localhost:4200',
    credentials:true
}));
app.use(bodyParser.json());

var myLogger1 = function (req, res, next) {
    console.log("myLogger1",req.body);
    next()
}
var myLogger2 = function (req, res, next) {
    console.log("myLogger2",req.body);
    next()
}

app.use(myLogger1);
app.use(myLogger2);

app.post('/create',function(req,res){
   let data=req.body;

    data.createdAt=new Date();
    enquiry.addEnquiry(data)
    .then(data=>{
        res.json(data);
    });
})
app.get('/',function(req,res){
    enquiry.getEnquiry()
    .then(data=>{
        res.json(data);
})
})
app.post('/search',function(req,res){
    
    enquiry.searchEnquiry(req.body.firstName)
    .then(data=>{

    
         res.json(data);
     });
 })
app.listen(port, function(){
    console.log(`Example app listening on port ${port}!`)
})
