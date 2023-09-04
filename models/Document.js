const mongoose = require("mongoose");
const {Schema} = mongoose;
const DocumentsSchema = new Schema({
    service_code:{
        type: String,
        required: true,
        // unique: true,
    },

    dept_code:{
        type: String,
        required: true,
        // unique: true,
    },
    pdf_data:{
        type: String,
        required: true,
        // unique: true,
    },
    ARN:{
        type:String,
        required: true,
        unique: true,
    },


});
const Document = mongoose.model("schema", DocumentsSchema);
// Document.createIndexes();
module.exports = Document;