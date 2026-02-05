const removeAt = (arr, index) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  if (index < 0 || index >= arr.length) {
    return [...arr]; // Return a shallow copy if index is out of bounds
  }
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

module.exports = { removeAt };
