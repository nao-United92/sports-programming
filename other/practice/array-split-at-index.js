function splitAtIndex(array, index) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  return [array.slice(0, index), array.slice(index)];
}
module.exports = splitAtIndex;
