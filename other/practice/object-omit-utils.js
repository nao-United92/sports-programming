const omit = (obj, keysToOmit) => {
  const newObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !keysToOmit.includes(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

module.exports = { omit };