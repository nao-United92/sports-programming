const mean = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (arr.length === 0) {
    return NaN; // Mean of an empty array is undefined
  }

  const sum = arr.reduce((acc, val) => {
    if (typeof val !== 'number' || isNaN(val)) {
      // If non-numeric values are present, they are effectively ignored
      // or treated as 0 for sum calculation if desired, but returning NaN is safer.
      // For this implementation, we'll propagate NaN if any non-number exists
      return NaN;
    }
    return acc + val;
  }, 0);

  if (isNaN(sum)) {
    return NaN;
  }

  return sum / arr.length;
};

module.exports = { mean };