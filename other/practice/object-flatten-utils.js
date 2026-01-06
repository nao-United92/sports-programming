const flattenObject = (obj, prefix = '', delimiter = '.') => {
  let result = {};

  // Ensure input is a non-null, non-array object
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return {};
  }

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = prefix ? `${prefix}${delimiter}${key}` : key;

      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        Object.assign(result, flattenObject(obj[key], newKey, delimiter));
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
};

module.exports = flattenObject;
