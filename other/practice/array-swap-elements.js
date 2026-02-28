
const swapElements = (arr, i, j) => {
  const result = [...arr];
  [result[i], result[j]] = [result[j], result[i]];
  return result;
};
module.exports = swapElements;
