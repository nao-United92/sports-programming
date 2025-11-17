const toCamelCase = (str) => {
  if (typeof str !== 'string') return str;
  return str.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};

const toSnakeCase = (str) => {
  if (typeof str !== 'string') return str;
  // Ensure not to add a leading underscore if the first letter is uppercase
  return str.replace(/[A-Z]/g, (letter, index) => {
    return index === 0 ? letter.toLowerCase() : `_${letter.toLowerCase()}`;
  });
};

const convertKeys = (obj, converter) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(v => convertKeys(v, converter));
  }

  return Object.keys(obj).reduce((acc, key) => {
    const newKey = converter(key);
    acc[newKey] = convertKeys(obj[key], converter);
    return acc;
  }, {});
};

const keysToCamel = (obj) => convertKeys(obj, toCamelCase);
const keysToSnake = (obj) => convertKeys(obj, toSnakeCase);

module.exports = {
  keysToCamel,
  keysToSnake,
};
