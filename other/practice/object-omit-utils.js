const omit = (obj, keys) => {
  if (obj === null || obj === undefined) {
    return {};
  }
  const newObj = { ...obj };
  keys.forEach(key => {
    delete newObj[key];
  });
  return newObj;
};

module.exports = { omit };
