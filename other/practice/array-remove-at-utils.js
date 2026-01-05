const arrayRemoveAt = (arr, index) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (index < 0 || index >= arr.length) {
    // Return a shallow copy if index is out of bounds
    return [...arr];
  }
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

module.exports = arrayRemoveAt;
