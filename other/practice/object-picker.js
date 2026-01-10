const pick = (obj, keys) => {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    throw new TypeError('Expected an object for the first argument.');
  }
  if (!Array.isArray(keys)) {
    throw new TypeError('Expected an array of strings for the second argument.');
  }
  const result = {};
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key];
    }
  }
  return result;
};

module.exports = { pick };
