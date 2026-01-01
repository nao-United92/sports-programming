const omit = (obj, keys) => {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }

  const newObj = { ...obj };
  const keysToRemove = Array.isArray(keys) ? keys : [keys];

  for (const key of keysToRemove) {
    if (Object.prototype.hasOwnProperty.call(newObj, key)) {
      delete newObj[key];
    }
  }

  return newObj;
};

module.exports = { omit };
