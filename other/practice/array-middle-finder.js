const median = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (arr.some(element => typeof element !== 'number')) {
    throw new TypeError('All elements in the array must be numbers.');
  }
  if (arr.length === 0) {
    return undefined; // Or throw an error, depending on desired behavior for empty arrays
  }

  const sortedArr = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 === 0) {
    // Even number of elements
    return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
  } else {
    // Odd number of elements
    return sortedArr[mid];
  }
};

module.exports = { median };
