export const mapValues = (obj, iteratee) => {
  const result = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = iteratee(obj[key], key, obj);
    }
  }
  return result;
};

export const mapKeys = (obj, iteratee) => {
  const result = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = iteratee(obj[key], key, obj);
      result[newKey] = obj[key];
    }
  }
  return result;
};
