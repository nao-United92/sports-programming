export const invert = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }
  const result = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[obj[key]] = key;
    }
  }
  return result;
};

export const mapKeys = (obj, iteratee) => {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }
  const result = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = iteratee(obj[key], key, obj);
      result[newKey] = obj[key];
    }
  }
  return result;
};
