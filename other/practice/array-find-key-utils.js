const findKey = (arr, val) => {
  if (!Array.isArray(arr)) {
    return undefined;
  }
  for (const obj of arr) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === val) {
        return key;
      }
    }
  }
  return undefined;
};

module.exports = { findKey };
