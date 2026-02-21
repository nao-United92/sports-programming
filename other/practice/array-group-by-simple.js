
const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    const k = typeof key === 'function' ? key(item) : item[key];
    (result[k] = result[k] || []).push(item);
    return result;
  }, {});
};

module.exports = groupBy;
