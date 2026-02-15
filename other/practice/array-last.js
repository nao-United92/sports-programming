function last(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument must be an array.');
  }
  if (arr.length === 0) {
    return undefined;
  }
  return arr[arr.length - 1];
}

module.exports = last;
