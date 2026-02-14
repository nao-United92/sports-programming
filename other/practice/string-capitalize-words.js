const capitalizeWords = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  if (str.length === 0) {
    return '';
  }

  return str
    .split(' ')
    .map((word) => {
      if (word.length === 0) {
        return '';
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
};

module.exports = { capitalizeWords };
