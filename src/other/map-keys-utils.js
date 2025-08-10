const identity = (x) => x;

export const mapKeys = (obj, iteratee = identity) => {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }
  const callback = typeof iteratee === 'function' ? iteratee : (val) => val[iteratee];
  const result = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = callback(obj[key], key, obj);
      result[newKey] = obj[key];
    }
  }
  return result;
};
