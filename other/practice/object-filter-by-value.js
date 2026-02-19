
const objectFilterByValue = (obj, predicate) => {
  if (typeof obj !== 'object' || obj === null) {
    throw new Error('Input must be an object');
  }
  return Object.keys(obj)
    .filter(key => predicate(obj[key]))
    .reduce((res, key) => {
      res[key] = obj[key];
      return res;
    }, {});
};

module.exports = objectFilterByValue;
