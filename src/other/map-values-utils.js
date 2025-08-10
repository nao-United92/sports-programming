const identity = (x) => x;

export const mapValues = (obj, iteratee = identity) => {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }
  const callback = typeof iteratee === 'function' ? iteratee : (val) => val[iteratee];
  const result = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = callback(obj[key], key, obj);
    }
  }
  return result;
};
