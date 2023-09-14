// const express = require('express');
// const mongoose = require('mongoose');
// const crypto = require('crypto'); 
// const fs = require('fs'); 
// const path = require('path'); 
// const Document = require("./models/Document");

// const app = express();
// const port = 3000;
// const connectToMongo = require("./db");
// connectToMongo();
// //app.use(cors());

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
// app.use(express.json());
// app.use("/api/document", require("./routes/document"))




// const pdfData = `
//   "dab1fca34f13c4d4b7933eb9dc029917d3f2347338a1c447243d5952cecde846"
// `;

// const pdfPath = path.join(__dirname, 'public', 'document.pdf');

// fs.writeFile(pdfPath, pdfData, 'base64', (err) => {
//     if (err) {
//         console.error('Error writing PDF file:', err);
//     } else {
//         console.log('PDF file saved:', pdfPath);
//     }
// });

// const data = {
//     "ARN": "itcourt_2023_1",
//     "encryptedPayload": "emmMw3nS0ezilxcLk4RX7ttIvSs5fhylUc5Uetkqgca40Q4ib9+/RPMmYElN4opsqpKhJf5YvvdyJ64TXb1myux0qL8cTntU9tB5D8ixa2c="
// };

// const jsonString = JSON.stringify(data);


// const hash = crypto.createHash('sha256').update(jsonString).digest('hex');

// console.log('Hash:', hash);

// if(dataHash == decryptedMessage){
//     console.log("Success")
// }











const express = require('express');
const mongoose = require('mongoose');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const Document = require('./models/Document');

const app = express();
const port = 3000;
const connectToMongo = require('./db');
connectToMongo();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(express.json());
app.use('/api/document', require('./routes/document'));


const data = {
    "ARN": "itcourt_2023_1",
    "encryptedPayload": "emmMw3nS0ezilxcLk4RX7ttIvSs5fhylUc5Uetkqgca40Q4ib9+/RPMmYElN4opsqpKhJf5YvvdyJ64TXb1myux0qL8cTntU9tB5D8ixa2c="
};

// const jsonString = JSON.stringify(data);
// const hash = crypto.createHash('sha256').update(jsonString).digest('hex');

//console.log('Hash:', hash);


//const pdfData = "dab1fca34f13c4d4b7933eb9dc029917d3f2347338a1c447243d5952cecde846";
//const pdfPath = path.join(__dirname, 'public', 'document.pdf');

// fs.writeFile(pdfPath, Buffer.from(pdfData, 'hex'), (err) => {
//     if (err) {
//         console.error('Error writing PDF file:', err);
//     } else {
//         console.log('PDF file saved:', pdfPath);
//     }
// });















// const crypto = require("crypto");

// const algorithm = "aes-256-cbc"; 


// const initVector = crypto.randomBytes(16);


// const message = "This is a secret message";


// const Securitykey = crypto.randomBytes(32);


// const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);


// let encryptedData = cipher.update(message, "utf-8", "hex");

// encryptedData += cipher.final("hex");

// console.log("Encrypted message: " + encryptedData);


// const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

// let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

// decryptedData += decipher.final("utf8");

// console.log("Decrypted message: " + decryptedData);





// const crypto = require('crypto');
// const algorithm = "AES-256-CBC"; 
// const key = crypto.randomBytes(32);
// const iv = crypto.randomBytes(16);


// function encrypt(text) {
//    let cipher = crypto.createCipheriv("AES-256-CBC", Buffer.from(key), iv);
//    let encrypted = cipher.update(text);
//    encrypted = Buffer.concat([encrypted, cipher.final()]);
//    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
// }

// // Decrypting text
// function decrypt(text) {
//    let iv = Buffer.from(text.iv, 'hex');
//    let encryptedText = Buffer.from(text.encryptedData, 'hex');
//    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
//    let decrypted = decipher.update(encryptedText);
//    decrypted = Buffer.concat([decrypted, decipher.final()]);
//    return decrypted.toString();
// }

// // Text send to encrypt function
// var hw = encrypt("Welcome to Tutorials Point...")
// console.log(hw)
// console.log(decrypt(hw))













/* const retrieveDataById = async(idToRetrieve) => {
    try {

        await connectToMongo();


        const document = await Document.findOne({ _id: "64fd576f0ecc49f0c32c975d" }).maxTimeMS(10000);

        if (document) {
            console.log("Retrieved document:", document);
        } else {
            console.log("Document not found");
        }
    } catch (error) {
        console.error("Error retrieving document:", error);
    }
};


const idToRetrieve = "64f9a1e6a44b4d1df372a2a5";
retrieveDataById(idToRetrieve);
 */


// Connect to MongoDB


// Create a Mongoose schema
// const Schema = mongoose.Schema;
// const mySchema = new Schema({
//   service_code: String,
//   depertment_code: String,
//   pdfData:String,
//   ARN: String,
// });

// Create a Mongoose model based on the schema
//const MyModel = mongoose.model('MyModel', mySchema);

// app.use(bodyParser.urlencoded({ extended: false }));

// Define a route to add data to MongoDB
// app.post('/add', (req, res) => {
//   const { name, age } = req.body;
//   const newData = new MyModel({ name, age });

//   newData.save((err) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Error saving data' });
//     } else {
//       res.json({ message: 'Data saved successfully' });
//     }
//   });
// });



// Connect to MongoDB


// Create a Mongoose schema
// const Schema = mongoose.Schema;
// const mySchema = new Schema({
//   service_code: String,
//   depertment_code: String,
//   pdfData:String,
//   ARN: String,
// });

// Create a Mongoose model based on the schema
//const MyModel = mongoose.model('MyModel', mySchema);

// app.use(bodyParser.urlencoded({ extended: false }));

// Define a route to add data to MongoDB
// app.post('/add', (req, res) => {
//   const { name, age } = req.body;
//   const newData = new MyModel({ name, age });

//   newData.save((err) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Error saving data' });
//     } else {
//       res.json({ message: 'Data saved successfully' });
//     }
//   });
// })