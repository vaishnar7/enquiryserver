const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/enquiry', {useNewUrlParser: true});


const enquiry = mongoose.model('enquiry', { 
    firstName:{
        type: String, 
        required:true},
    lastName: {
         type:String, 
         required:true},
    email: {
        type: String,
         required:true},
    
    phone:{
        type: String,
        required:true},
    comment: {
        type:String, 
        required:true},
    createdAt: {
        type: Date,
         required:true,}
    });
         

 exports.enquiry =enquiry;   