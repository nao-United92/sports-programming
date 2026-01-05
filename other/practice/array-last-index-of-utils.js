const arrayLastIndexOf = (arr, value, fromIndex = arr.length - 1) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (arr.length === 0) {
    return -1;
  }

  // Ensure fromIndex is within bounds, handling negative values by starting from 0 if fromIndex < 0
  const start = Math.min(fromIndex >= 0 ? fromIndex : arr.length + fromIndex, arr.length - 1);
  
  for (let i = start; i >= 0; i--) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};

module.exports = arrayLastIndexOf;
