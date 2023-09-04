
const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.helloworld=(req,res) =>{
    res.send("hello world");
};

exports.retrieveUser= async (req,res) => {
   try{

    let salt = await bcrypt.genSaltSync(10)
    let secARN = await bcrypt.hashSync(req.body.ARN, salt);
user = await User.create({
    service_code: req.body.service_code,
    dept_code: req.body.dept_code,
    pdf_data: req.body.pdf_data,
    ARN: secARN,
});

console.log(user._id);
return res.status(200).json({ statusMsg:true, message: "User added successfully"})
   }catch(error){
    console.log("error-----", error);
return res.status(400).json({
    statusMsg: false, message: "Create User Failed"
});
}
}