
const stringToCamelCase = (str) => {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '')
    .replace(/-+/g, '');
};

module.exports = stringToCamelCase;
