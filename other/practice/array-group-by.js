
const groupBy = (arr, key) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('The first argument must be an array.');
  }
  return arr.reduce((acc, obj) => {
    const groupKey = typeof key === 'function' ? key(obj) : obj[key];
    if (groupKey === undefined) {
      return acc;
    }
    (acc[groupKey] = acc[groupKey] || []).push(obj);
    return acc;
  }, {});
};

module.exports = { groupBy };
