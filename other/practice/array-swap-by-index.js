function swapByIndex(array, i, j) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  if (i < 0 || i >= array.length || j < 0 || j >= array.length) return array;
  const result = [...array];
  [result[i], result[j]] = [result[j], result[i]];
  return result;
}
module.exports = swapByIndex;
