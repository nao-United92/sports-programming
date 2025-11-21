const encode = (str) => {
  if (typeof str !== 'string') {
    str = String(str);
  }
  return Buffer.from(str, 'utf8').toString('base64');
};

const decode = (encodedStr) => {
  if (typeof encodedStr !== 'string') {
    // Return empty string for non-string input to avoid errors
    return '';
  }
  try {
    // Check if the string is a valid Base64 string
    const buffer = Buffer.from(encodedStr, 'base64');
    if (buffer.toString('base64') !== encodedStr) {
        return '';
    }
    return buffer.toString('utf8');
  } catch (e) {
    // Catch potential errors from invalid base64 strings
    return '';
  }
};

module.exports = { encode, decode };