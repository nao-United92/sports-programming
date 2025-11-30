const toCamelCase = (str) => {
  if (typeof str !== 'string') return str;
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace('-', '').replace('_', '')
  );
};

const toSnakeCase = (str) => {
  if (typeof str !== 'string') return str;
  const result = str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  return result.startsWith('_') ? result.substring(1) : result;
};

const convertKeys = (obj, converter) => {
  if (Array.isArray(obj)) {
    return obj.map(v => convertKeys(v, converter));
  } else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce((acc, key) => {
      const newKey = converter(key);
      acc[newKey] = convertKeys(obj[key], converter);
      return acc;
    }, {});
  }
  return obj;
};

const keysToCamelCase = (obj) => convertKeys(obj, toCamelCase);
const keysToSnakeCase = (obj) => convertKeys(obj, toSnakeCase);

module.exports = {
  keysToCamelCase,
  keysToSnakeCase,
};
