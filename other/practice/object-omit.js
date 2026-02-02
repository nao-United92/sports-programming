const omit = (obj, keys) => {
  const newObj = { ...obj };
  for (const key of keys) {
    delete newObj[key];
  }
  return newObj;
};

module.exports = omit;
