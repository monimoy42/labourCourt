const express = require("express");

const app = express();
const port = 3000;
const connectToMongo = require("./db");
connectToMongo();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(express.json());
app.use("/api/document", require("./routes/document"));
