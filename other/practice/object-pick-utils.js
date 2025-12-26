const pick = (obj, keys) => {
  if (obj == null) {
    return {};
  }
  return keys.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

module.exports = {
  pick
};