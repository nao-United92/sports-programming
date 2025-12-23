const groupWith = (arr, fn) =>
  arr.reduce((acc, val, i, arr) => {
    const key = fn(val, i, arr);
    acc[key] = (acc[key] || []).concat(val);
    return acc;
  }, {});

module.exports = groupWith;
