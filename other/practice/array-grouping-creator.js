const groupBy = (arr, key) => {
  return arr.reduce((acc, item) => {
    const group = typeof key === 'function' ? key(item) : item[key];
    (acc[group] = acc[group] || []).push(item);
    return acc;
  }, {});
};

module.exports = { groupBy };
