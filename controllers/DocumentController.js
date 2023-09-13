const Document = require("../models/Document");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const encryptionMethod = "AES-256-CBC";
const secret = "My32charPasswordAndInitVectorStr"; //must be 32 characters long
const iv = secret.substring(0, 16);

// const encrypt = function (data, encryptionMethod, secret, iv) {
//   const encryptor = crypto.createCipheriv(encryptionMethod, secret, iv);
//   return (
//     encryptor.update(data, "utf8", "base64") +
//     encryptor.final("base64")
//   );
// };
const decrypt = function (encryptedMessage, encryptionMethod, secret, iv) {
    const decryptor = crypto.createDecipheriv(encryptionMethod, secret, iv);
    return (
      decryptor.update(encryptedMessage, "base64", "utf8") +
      decryptor.final("utf8")
    );
  };


exports.helloworld = (req, res) => {
  res.send("hello world");
};

exports.storedocument = async (req, res) => {
  try {
    // const concatenatedData =
    //   req.body.service_code +
    //   req.body.pdf_data +
    //   req.body.ARN +
    //   req.body.dept_code;

    //   encryptedMessage=req.body.hash;

    //   const dataHash = crypto
    //   .createHash("sha256")
    //   .update(concatenatedData)
    //   .digest("hex");
      
    // const secARN = encrypt(req.body.ARN, encryptionMethod, secret, iv);

    const decryptedMessage = decrypt(
        req.body.hash,
        encryptionMethod,
        secret,
        iv
      );

    if(dataHash == decryptedMessage){
    const document = await Document.create({
      service_code: req.body.service_code,
      dept_code: req.body.dept_code,
      pdf_data: req.body.pdf_data,
      ARN: secARN,
    });
    }
    

    console.log(document._id);
    return res.status(200).json({ statusMsg: true, message: "Document added successfully" });
  } catch (error) {
    console.log("error-----", error);
    return res.status(400).json({
      statusMsg: false,
      message: "Create User Failed",
    });
  }
};

exports.retrieveDataById = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);

    // Decrypt the ARN before sending it in the response
    document.ARN = decrypt(document.ARN, encryptionMethod, secret, iv);

    res.send(document);
  } catch (error) {
    console.error("Error retrieving document:", error);
  }
};

exports.retrieveAllData = async (req, res) => {
  try {
    const documents = await Document.find({});

    // Decrypt the ARN for each document before sending it in the response
    documents.forEach((document) => {
      document.ARN = decrypt(document.ARN, encryptionMethod, secret, iv);
    });

    res.send(documents);
  } catch (error) {
    console.error("Error retrieving documents:", error);
  }
};





// MyModel.findOne({ /* query */ }).maxTimeMS(5000).exec(function(err, doc) {
//     // Handle the result or error here
//   });

// MyModel.findOne({ /* query */ }).maxTimeMS(5000).exec(function(err, doc) {
//     // Handle the result or error here
//   });
  