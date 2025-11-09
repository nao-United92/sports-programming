const isObject = (val) => val !== null && typeof val === 'object' && val.constructor === Object;

const toCamelCase = (str) => {
  if (typeof str !== 'string') return str;
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace('-', '').replace('_', '')
  );
};

const keysToCamel = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map((v) => keysToCamel(v));
  } else if (isObject(obj)) {
    return Object.keys(obj).reduce((result, key) => {
      result[toCamelCase(key)] = keysToCamel(obj[key]);
      return result;
    }, {});
  }
  return obj;
};

const toSnakeCase = (str) => {
    if (typeof str !== 'string') return str;
    // This regex handles camelCase and PascalCase, but not sequences of capitals like 'API'.
    return str.replace(/([A-Z])/g, "_$1").toLowerCase().replace(/^_/, '');
};

const keysToSnake = (obj) => {
    if (Array.isArray(obj)) {
        return obj.map(v => keysToSnake(v));
    } else if (isObject(obj)) {
        return Object.keys(obj).reduce((result, key) => {
            result[toSnakeCase(key)] = keysToSnake(obj[key]);
            return result;
        }, {});
    }
    return obj;
};

module.exports = {
  keysToCamel,
  keysToSnake,
};
