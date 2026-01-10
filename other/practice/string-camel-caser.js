const camelCase = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for the first argument.');
  }
  if (str.length === 0) {
    return '';
  }

  const startSpaces = str.match(/^\s*/)[0];
  const endSpaces = str.match(/\s*$/)[0];
  const innerStr = str.trim();

  if (innerStr.length === 0) {
      return str;
  }

  const result = innerStr
    .split(/[\s-_]+/)
    .map((word, index) => {
      if (word.length === 0) return '';
      if (index === 0) {
        return word.charAt(0).toLowerCase() + word.slice(1); // Keep rest of the case for first word
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    })
    .join('');

  return startSpaces + result + endSpaces;
};

module.exports = { camelCase };
