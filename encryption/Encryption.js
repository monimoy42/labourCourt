const crypto = require("crypto"); // Import the crypto module

const encryptionMethod = "AES-256-CBC";
const secret = "My32charPasswordAndInitVectorStr";
const iv = secret.substring(0, 16);

const encrypt = function (data, encryptionMethod, secret, iv) {
  const encryptor = crypto.createCipheriv(encryptionMethod, secret, iv);
  return encryptor.update(data, "utf8", "base64") + encryptor.final("base64");
};

function generateEncryptedData(service_code, pdf_data, dept_code, arn) {
  const concatenatedData = service_code + pdf_data + dept_code + arn;
  const hashedData = crypto
    .createHash("sha256")
    .update(concatenatedData)
    .digest("hex");
  const encryptedMessage = encrypt(hashedData, encryptionMethod, secret, iv);
  return encryptedMessage;
}

let encryptedData = generateEncryptedData(
  "service",
  "pdf",
  "depertment",
  "cdddce"
);

console.log(encryptedData);
