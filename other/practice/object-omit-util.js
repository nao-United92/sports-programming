const omit = (obj, keys) => {
  const keySet = new Set(keys);
  return Object.keys(obj)
    .filter(key => !keySet.has(key))
    .reduce((newObj, key) => {
      newObj[key] = obj[key];
      return newObj;
    }, {});
};

module.exports = omit;
