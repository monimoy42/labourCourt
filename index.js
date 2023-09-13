const express = require('express');
const mongoose = require('mongoose');
const crypto = require('crypto'); 
const fs = require('fs'); 
const path = require('path'); 
const Document = require("./models/Document");

const app = express();
const port = 3000;
const connectToMongo = require("./db");
connectToMongo();
//app.use(cors());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.use(express.json());
app.use("/api/document", require("./routes/document"))


const retrieveDataById = async (idToRetrieve) => {
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