const omit = (obj, keysToOmit) => {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    return {};
  }

  const result = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && !keysToOmit.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
};

module.exports = omit;
