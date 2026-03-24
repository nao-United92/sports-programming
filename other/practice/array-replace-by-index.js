function replaceByIndex(array, index, value) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  const result = [...array];
  if (index >= 0 && index < result.length) {
    result[index] = value;
  }
  return result;
}
module.exports = replaceByIndex;
