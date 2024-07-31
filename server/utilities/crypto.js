const dotenv = require("dotenv");
dotenv.config({ path: "../../../.env" });

const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const secretKey = process.env.CRYPTO_SECRET_KEY;

async function encrypt(text) {
  text = JSON.stringify(text);

  // Ensure secretKey is defined and is a string before using it
  if (typeof secretKey !== 'string') {
    throw new TypeError('CRYPTO_SECRET_KEY must be a string');
  }

  // Generate a random IV (Initialization Vector)
  const iv = crypto.randomBytes(16);

  // Create key from secretKey
  const key = Buffer.alloc(32, secretKey, 'hex');

  let cipher = crypto.createCipheriv(algorithm, key, iv);

  // Ensure text is defined and is a string before using it
  if (typeof text !== 'string') {
    throw new TypeError('Parameter "text" must be a string');
  }

  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  // Prefix the IV to the encrypted data (separated by a delimiter for separation)
  const encryptedData = iv.toString('hex') + ':' + encrypted;

  return encryptedData;
}

async function decrypt(encryptedData) {
  // Ensure secretKey is defined and is a string before using it
  if (typeof secretKey !== 'string') {
    throw new TypeError('CRYPTO_SECRET_KEY must be a string');
  }

  // Create key from secretKey
  const key = Buffer.alloc(32, secretKey, 'hex');

  // Split the IV and encrypted data (assuming they are separated by a delimiter)
  const parts = encryptedData?.split(':');
  const iv = Buffer.from(parts?.shift(), 'hex');
  const encryptedText = parts?.join(':');

  const decipher = crypto?.createDecipheriv(algorithm, key, iv);

  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}

// Example usage
// try {
//   const parameterToEncode = 'Hello, World!';
//   // const { iv, encryptedData } = encrypt(parameterToEncode);
//   console.log('Encrypted:', { iv, encryptedData });

//   const decryptedData = decrypt(encryptedData);
//   console.log('Decrypted:', decryptedData);
// } catch (err) {
//   console.error('Encryption/Decryption error:', err.message);
// }

// export {
module.exports = {
  encrypt,
  decrypt
}
