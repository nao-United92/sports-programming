const arrayUnzip = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the argument.');
  }
  if (arr.length === 0) {
    return [];
  }

  // Determine the maximum length of sub-arrays to correctly size the output arrays
  const numOutputArrays = arr.reduce((max, subArr) => {
      if (!Array.isArray(subArr)) {
          throw new TypeError('Expected an array of arrays for the argument.');
      }
      return Math.max(max, subArr.length);
  }, 0);

  const result = Array.from({ length: numOutputArrays }, () => []);

  for (let i = 0; i < arr.length; i++) { // Iterate through each inner array
    for (let j = 0; j < numOutputArrays; j++) { // Iterate through the potential output arrays
      result[j].push(arr[i][j]);
    }
  }
  return result;
};

module.exports = arrayUnzip;
