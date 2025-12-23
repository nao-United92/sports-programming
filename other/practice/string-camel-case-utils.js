const toCamelCase = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  // Convert the string to a sequence of words
  const words = str.match(/[a-zA-Z0-9]+/g) || [];
  
  // Lowercase the first word, and capitalize the first letter of subsequent words
  return words
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
};

module.exports = toCamelCase;