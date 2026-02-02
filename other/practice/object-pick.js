const pick = (obj, keys) => {
  const newObj = {};
  for (const key of keys) {
    if (key in obj) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

module.exports = pick;
