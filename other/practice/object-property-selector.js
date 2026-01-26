const pick = (obj, keys) => {
  if (obj === null || typeof obj !== 'object' || !Array.isArray(keys)) {
    return {};
  }

  return keys.reduce((acc, key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

const omit = (obj, keys) => {
  if (obj === null || typeof obj !== 'object' || !Array.isArray(keys)) {
    return {};
  }

  const newObj = { ...obj };
  keys.forEach(key => {
    delete newObj[key];
  });
  return newObj;
};


module.exports = { pick, omit };