const toWords = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase/PascalCase to "camel Case"
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2') // acronyms like "USA Today" to "USA Today"
    .replace(/([0-9])([a-zA-Z])/g, '$1 $2') // number followed by letter
    .replace(/([a-zA-Z])([0-9])/g, '$1 $2') // letter followed by number
    .replace(/[^a-zA-Z0-9]+/g, ' ') // Replace non-alphanumeric with space
    .toLowerCase()
    .trim()
    .split(' ');
};

const kebabCase = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for the argument.');
  }
  if (str.length === 0) {
    return '';
  }
  return toWords(str).join('-');
};

export default kebabCase;