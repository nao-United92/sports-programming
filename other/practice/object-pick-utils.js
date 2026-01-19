const pick = (obj, keysToPick) => {
  const newObj = {};
  for (const key of keysToPick) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

module.exports = { pick };