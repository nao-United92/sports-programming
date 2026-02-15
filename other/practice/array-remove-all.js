function removeAll(arr, element) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array.');
  }
  return arr.filter(item => item !== element);
}

module.exports = removeAll;
