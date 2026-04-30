const mapKeys = (obj, fn) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[fn(obj[key], key, obj)] = obj[key];
    return acc;
  }, {});
module.exports = mapKeys;
