const db = require('./db');

function addEnquiry(data){
    const newEnquiry = new db.enquiry(data)
return newEnquiry.save();
}
function getEnquiry(){
    return db.enquiry.find();
}
function searchEnquiry(value){
    return db.enquiry.find({
        $or:[
            {firstName:new RegExp(value,'i')},
            {lastName:new RegExp(value,'i')},
            {email:new RegExp(value,'i')},
            {phone:new RegExp(value,'i')},
            {comment:new RegExp(value,'i')}
            
            
          

        ]
       });
        
    
}

exports.addEnquiry = addEnquiry;
exports.getEnquiry = getEnquiry;
exports.searchEnquiry=searchEnquiry;