const express = require('express');
const mongoose = require('mongoose');
//const cors = require("cors");

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