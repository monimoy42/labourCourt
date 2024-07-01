const Document = require("../models/Document");
const crypto = require("crypto");
// const decrypt = require("./encryption/enc-dec");

const encryptionMethod = "AES-256-CBC";
const secret = "My32charPasswordAndInitVectorStr";
const iv = secret.substring(0, 16);

// decryption func
const decrypt = function (encryptedMessage, encryptionMethod, secret, iv) {
  const decipher = crypto.createDecipheriv(encryptionMethod, secret, iv);
  return (
    decipher.update(encryptedMessage, "base64", "utf8") + decipher.final("utf8")
  );
};

exports.storedocument = async (req, res) => {
  const { service_code, pdf_data, ARN, dept_code } = req.body;

  const concatenatedData = service_code + pdf_data  + dept_code + ARN;

  const dataHash = crypto
    .createHash("sha256")
    .update(concatenatedData)
    .digest("hex");

  const decryptedData = decrypt(
    req.body.encryptedMessage,
    encryptionMethod,
    secret,
    iv
  );
  // console.log(dataHash);

  if (dataHash === decryptedData) {
    const document = await Document.create({
      service_code,
      dept_code,
      pdf_data,
      ARN,
    });
    return res
      .status(200)
      .json({ DRN: document._id, message: "Document added successfully" });
  } else {
    return res.status(400).json({
      message: "Invalid data sent",
    });
  }
};

exports.retrieveDataById = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);

    res.send(document);
  } catch (error) {
    console.error("Error retrieving document:", error);
    return res.status(400).json({ message: "Error retrieving document" });
  }
};

// exports.retrieveAllData = async (req, res) => {
//   try {
//     const documents = await Document.find({});
//     res.send(documents);
//   } catch (error) {
//     return res.status(400).json({ message: error });
//   }
// };
