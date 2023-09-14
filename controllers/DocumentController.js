// const Document = require("../models/Document");
// const bcrypt = require("bcrypt");
// const crypto = require("crypto");

// const encryptionMethod = "AES-256-CBC";
// const secret = "My32charPasswordAndInitVectorStr"; //must be 32 characters long
// const iv = secret.substring(0, 16);

// // const encrypt = function (data, encryptionMethod, secret, iv) {
// //   const encryptor = crypto.createCipheriv(encryptionMethod, secret, iv);
// //   return (
// //     encryptor.update(data, "utf8", "base64") +
// //     encryptor.final("base64")
// //   );
// // };
// const decrypt = function (encryptedMessage, encryptionMethod, secret, iv) {
//     const decryptor = crypto.createDecipheriv(encryptionMethod, secret, iv);
//     return (
//       decryptor.update(encryptedMessage, "base64", "utf8") +
//       decryptor.final("utf8")
//     );
//   };


// exports.helloworld = (req, res) => {
//   res.send("hello world");
// };

// exports.storedocument = async (req, res) => {
//   try {
//     // const concatenatedData =
//     //   req.body.service_code +
//     //   req.body.pdf_data +
//     //   req.body.ARN +
//     //   req.body.dept_code;

//     //   encryptedMessage=req.body.hash;

//     //   const dataHash = crypto
//     //   .createHash("sha256")
//     //   .update(concatenatedData)
//     //   .digest("hex");
      
//     // const secARN = encrypt(req.body.ARN, encryptionMethod, secret, iv);

//     const decryptedMessage = decrypt(
//         req.body.hash,
//         encryptionMethod,
//         secret,
//         iv
//       );

//     if(dataHash == decryptedMessage){
//     const document = await Document.create({
//       service_code: req.body.service_code,
//       dept_code: req.body.dept_code,
//       pdf_data: req.body.pdf_data,
//       ARN: secARN,
//     });
//     }
    

//     console.log(document._id);
//     return res.status(200).json({ statusMsg: true, message: "Document added successfully" });
//   } catch (error) {
//     console.log("error-----", error);
//     return res.status(400).json({
//       statusMsg: false,
//       message: "Create User Failed",
//     });
//   }
// };

// exports.retrieveDataById = async (req, res) => {
//   try {
//     const document = await Document.findById(req.params.id);

//     // Decrypt the ARN before sending it in the response
//     document.ARN = decrypt(document.ARN, encryptionMethod, secret, iv);

//     res.send(document);
//   } catch (error) {
//     console.error("Error retrieving document:", error);
//   }
// };

// exports.retrieveAllData = async (req, res) => {
//   try {
//     const documents = await Document.find({});

//     // Decrypt the ARN for each document before sending it in the response
//     documents.forEach((document) => {
//       document.ARN = decrypt(document.ARN, encryptionMethod, secret, iv);
//     });

//     res.send(documents);
//   } catch (error) {
//     console.error("Error retrieving documents:", error);
//   }
// };







// const Document = require('../models/Document');
// const crypto = require('crypto');

// const encryptionMethod = 'AES-256-CBC';
// const secret = 'My32charPasswordAndInitVectorStr'; 
// const iv = secret.substring(0, 16);

// const decrypt = function (encryptedMessage, encryptionMethod, secret, iv) {
//     const decipher = crypto.createDecipheriv(encryptionMethod, secret, iv);
//     return (
//         decipher.update(encryptedMessage, 'base64', 'utf8') +
//         decipher.final('utf8')
//     );
// };

// const calculateSHA256Hash = (data) => {
//     const hash = crypto.createHash('sha256').update(data).digest('hex');
//     return hash;
// };

// exports.helloworld = (req, res) => {
//     res.send('hello world');
// };

// exports.storedocument = async (req, res) => {
//     try {
//         const concatenatedData = req.body.service_code +
//             req.body.pdf_data +
//             req.body.ARN +
//             req.body.dept_code;

       
//         const dataHash = calculateSHA256Hash(concatenatedData);

        
//         const DecryptedData = decrypt(req.body.encryptedMessage, encryptionMethod, secret, iv);

//         console.log(dataHash);

       

//         res.status(200).json({ success: true, dataHash });
//     } catch (error) {
//         console.error('Error storing document:', error);
//         res.status(500).json({ success: false, error: 'Internal Server Error' });
//     }
// };

// exports.retrieveDataById = async (req, res) => {
//     try {
//         const document = await Document.findById(req.params.id);

//         document.ARN = decrypt(document.ARN, encryptionMethod, secret, iv);

//         res.send(document);
//     } catch (error) {
//         console.error('Error retrieving document:', error);
//         res.status(400).json({ statusMsg: false, message: 'Error retrieving document' });
//     }
// };

// exports.retrieveAllData = async (req, res) => {
//     try {
//         const documents = await Document.find({});

        
//         documents.forEach((document) => {
//             document.ARN = decrypt(document.ARN, encryptionMethod, secret, iv);
//         });

//         res.send(documents);
//     } catch (error) {
//         console.error('Error retrieving documents:', error);
//         res.status(400).json({ statusMsg: false, message: 'Error retrieving documents' });
//     }
// };




















const Document = require('../models/Document');
const crypto = require('crypto');

const encryptionMethod = 'AES-256-CBC';
const secret = 'My32charPasswordAndInitVectorStr'; // Replace with your secret key (32 characters long)
const iv = secret.substring(0, 16);

const decrypt = function (encryptedMessage, encryptionMethod, secret, iv) {
    const decipher = crypto.createDecipheriv(encryptionMethod, secret, iv);
    return (
        decipher.update(encryptedMessage, 'base64', 'utf8') +
        decipher.final('utf8')
    );
};


const calculateSHA256Hash = (data) => {
  const hash = crypto.createHash('sha256').update(data).digest('hex');
  return hash;
};


//const storedHash = 'dab1fca34f13c4d4b7933eb9dc029917d3f2347338a1c447243d5952cecde846'; 
const inputData = ''


const calculatedHash = calculateSHA256Hash(inputData);


// if (calculatedHash === storedHash) {
//   console.log('Hashes match! Data is unchanged.');
// } else {
//   console.log('Hashes do not match! Data may be tampered with.');
// }


exports.helloworld = (req, res) => {
    res.send('hello world');
};


exports.storedocument = async(req,res)=> {
  const concatenatedData =  req.body.service_code +
   req.body.pdf_data +
    req.body.ARN +
   req.body.dept_code;
   
   const dataHash = crypto
      .createHash('sha256')
      .update(concatenatedData)
      .digest('hex');
    DecryptedData=decrypt(req.body.encryptedMessage);
    console.log(dataHash);
    if(dataHash==DecryptedData){
    
    }
}

// const mongoose = require("mongoose");

// exports.storedocument = async (req, res) => {
  
//   const documentId = "";

//   try {
//     const document = await Document.findById(documentId);

//     if (!document) {
//       return res.status(404).json({ error: "Document not found" });
//     }

//     // Print the service_code value
//     console.log("service_code:", document.service_code);

//     // You can also send the service_code value as a response if needed
//     res.status(200).json({ service_code: document.service_code });
//   } catch (err) {
//     console.error("Error finding document:", err);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// };

 
    // try {
    //     const dataHash = crypto.createHash('sha256')
    //         .update(JSON.stringify(req.body))
    //         .digest('hex');

    //     const decryptedMessage = decrypt(
    //         req.body.hash,
    //         encryptionMethod,
    //         secret,
    //         iv
    //     );

//         if (dataHash === decryptedMessage) {
//             const document = await Document.create({
//                 service_code: req.body.service_code,
//                 dept_code: req.body.dept_code,
//                 pdf_data: req.body.pdf_data,
//                 ARN: req.body.ARN,
//             });

//             console.log('Document ID:', document._id);
//             return res.status(200).json({ statusMsg: true, message: 'Document added successfully' });
//         } else {
//             return res.status(400).json({ statusMsg: false, message: 'Hash validation failed' });
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         return res.status(400).json({ statusMsg: false, message: 'Create User Failed' });
//     }
 


exports.retrieveDataById = async (req, res) => {
    try {
        const document = await Document.findById(req.params.id);

        
        document.ARN = decrypt(document.ARN, encryptionMethod, secret, iv);

        res.send(document);
    } catch (error) {
        console.error('Error retrieving document:', error);
        return res.status(400).json({ statusMsg: false, message: 'Error retrieving document' });
    }
};

exports.retrieveAllData = async (req, res) => {
    try {
        const documents = await Document.find({});

       
        documents.forEach((document) => {
            document.ARN = decrypt(document.ARN, encryptionMethod, secret, iv);
        });

        res.send(documents);
    } catch (error) {
        console.error('Error retrieving documents:', error);
        return res.status(400).json({ statusMsg: false, message: 'Error retrieving documents' });
    }
};















// MyModel.findOne({ /* query */ }).maxTimeMS(5000).exec(function(err, doc) {
//     // Handle the result or error here
//   });

// MyModel.findOne({ /* query */ }).maxTimeMS(5000).exec(function(err, doc) {
//     // Handle the result or error here
//   });