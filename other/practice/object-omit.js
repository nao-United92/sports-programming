const omit = (obj, keysToOmit) => {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    throw new TypeError('Expected a non-null, non-array object for the first argument');
  }
  if (!Array.isArray(keysToOmit)) {
    throw new TypeError('Expected an array of keys for the second argument');
  }

  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && !keysToOmit.includes(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

module.exports = { omit };
