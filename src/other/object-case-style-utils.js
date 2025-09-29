const toCamel = (s) => {
  return s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
};

const toSnake = (str) => {
  if (typeof str !== 'string') return str;
  return str
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '');
};

const isObject = (obj) => obj !== null && typeof obj === 'object' && !Array.isArray(obj);

const convertKeys = (obj, converter) => {
  if (isObject(obj)) {
    const newObj = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[converter(key)] = convertKeys(obj[key], converter);
      }
    }
    return newObj;
  } else if (Array.isArray(obj)) {
    return obj.map(item => convertKeys(item, converter));
  }
  return obj;
};

export const keysToCamel = (obj) => convertKeys(obj, toCamel);
export const keysToSnake = (obj) => convertKeys(obj, toSnake);