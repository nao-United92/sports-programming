const groupBy = (arr, key) => {
  if (!Array.isArray(arr)) {
    throw new Error("Expected an array.");
  }
  return arr.reduce((acc, item) => {
    const group =
      typeof key === "function" ? key(item) : item[key];
    acc[group] = acc[group] || [];
    acc[group].push(item);
    return acc;
  }, {});
};

module.exports = { groupBy };
