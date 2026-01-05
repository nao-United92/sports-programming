const arrayRemove = (arr, value) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  const index = arr.indexOf(value);
  if (index === -1) {
    return [...arr]; // Return a shallow copy if value not found
  }
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

module.exports = arrayRemove;