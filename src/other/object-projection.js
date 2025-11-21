const pick = (obj, keys) => {
  if (obj === null || typeof obj !== 'object') {
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

const omit = (obj, keys) => {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }
  const result = {};
  const keySet = new Set(keys);
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && !keySet.has(key)) {
      result[key] = obj[key];
    }
  }
  return result;
};

module.exports = { pick, omit };
