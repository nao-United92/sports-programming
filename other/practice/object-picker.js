const pick = (obj, keys) => {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }
  const keysToPick = Array.isArray(keys) ? keys : [keys];
  return keysToPick.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

module.exports = { pick };