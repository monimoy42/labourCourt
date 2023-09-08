
const Document = require("../models/Document");
const bcrypt = require("bcrypt");

exports.helloworld=(req,res) =>{
    res.send("hello world");
};

exports.storedocument= async (req,res) => {
   try{

    let salt = await bcrypt.genSaltSync(10)
    let secARN = await bcrypt.hashSync(req.body.ARN, salt);
document = await Document.create({
    service_code: req.body.service_code,
    dept_code: req.body.dept_code,
    pdf_data: req.body.pdf_data,
    ARN: secARN,
});

console.log(document._id);
return res.status(200).json({ statusMsg:true, message: "Document added successfully"})
   }catch(error){
    console.log("error-----", error);
return res.status(400).json({
    statusMsg: false, message: "Create User Failed"
});
}
}

// MyModel.findOne({ /* query */ }).maxTimeMS(5000).exec(function(err, doc) {
//     // Handle the result or error here
//   });
  