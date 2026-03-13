/**
 * Truncates a string to a maximum number of bytes (UTF-8).
 * 
 * @param {string} str 
 * @param {number} maxBytes 
 * @returns {string}
 */
const truncateBytes = (str, maxBytes) => {
  const buf = Buffer.from(str, 'utf8');
  if (buf.length <= maxBytes) return str;
  
  // Truncate and ensure we don't break a multi-byte character
  let result = buf.slice(0, maxBytes).toString('utf8');
  
  // If the last character is incomplete, toString() usually handles it by 
  // replacing it with the replacement character, but we want to trim it.
  while (Buffer.from(result, 'utf8').length > maxBytes) {
    str = str.slice(0, -1);
    result = Buffer.from(str, 'utf8').slice(0, maxBytes).toString('utf8');
  }
  
  return result;
};

module.exports = truncateBytes;
