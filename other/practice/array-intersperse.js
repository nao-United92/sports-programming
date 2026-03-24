function intersperse(array, separator) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  if (array.length === 0) return [];
  const result = [array[0]];
  for (let i = 1; i < array.length; i++) {
    result.push(separator, array[i]);
  }
  return result;
}
module.exports = intersperse;
