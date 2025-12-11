const pick = (obj, keys) => {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    return {};
  }

  const result = {};
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key];
    }
  }
  return result;
};

module.exports = pick;
