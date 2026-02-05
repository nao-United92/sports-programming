const lowerCaseKeys = (obj) => {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    return obj;
  }

  return Object.keys(obj).reduce((acc, key) => {
    const lowerKey = key.toLowerCase();
    acc[lowerKey] = typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])
      ? lowerCaseKeys(obj[key])
      : obj[key];
    return acc;
  }, {});
};

module.exports = { lowerCaseKeys };
