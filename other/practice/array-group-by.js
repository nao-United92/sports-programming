const groupBy = (arr, fn) => {
  return arr.reduce((acc, item) => {
    const key = typeof fn === "function" ? fn(item) : item[fn];
    (acc[key] = acc[key] || []).push(item);
    return acc;
  }, {});
};
module.exports = groupBy;