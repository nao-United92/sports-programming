const pick = (obj, keys) => {
  const result = {};
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
};

const omit = (obj, keys) => {
  const result = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result;
};

module.exports = { pick, omit };