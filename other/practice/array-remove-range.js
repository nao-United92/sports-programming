const removeRange = (arr, startIndex, endIndex) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument');
  }
  if (typeof startIndex !== 'number' || startIndex < 0 || !Number.isInteger(startIndex)) {
    throw new TypeError('Expected startIndex to be a non-negative integer');
  }
  if (typeof endIndex !== 'number' || endIndex < 0 || !Number.isInteger(endIndex)) {
    throw new TypeError('Expected endIndex to be a non-negative integer');
  }
  if (startIndex > endIndex) {
    throw new Error('startIndex cannot be greater than endIndex');
  }

  // Handle cases where range is outside or partially outside array bounds
  const actualStartIndex = Math.max(0, startIndex);
  const actualEndIndex = Math.min(arr.length - 1, endIndex);

  if (actualStartIndex > actualEndIndex) {
    // If the effective range is empty or invalid after clamping, return original array copy
    return [...arr];
  }

  return [...arr.slice(0, actualStartIndex), ...arr.slice(actualEndIndex + 1)];
};

module.exports = { removeRange };
