const encryptionMethod = "AES-256-CBC";
const secret = "My32charPasswordAndInitVectorStr";
const iv = secret.substring(0, 16);

exports.decrypt = function (encryptedMessage, encryptionMethod, secret, iv) {
  const decipher = crypto.createDecipheriv(encryptionMethod, secret, iv);
  return (
    decipher.update(encryptedMessage, "base64", "utf8") + decipher.final("utf8")
  );
};
