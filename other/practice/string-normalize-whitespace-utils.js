const normalizeWhitespace = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  // Replace multiple whitespace characters with a single space, then trim leading/trailing spaces
  return str.replace(/\s+/g, ' ').trim();
};

module.exports = normalizeWhitespace;
