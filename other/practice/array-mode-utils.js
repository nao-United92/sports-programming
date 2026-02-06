/**
 * Calculates the mode(s) of an array.
 * If there are multiple modes, all are returned.
 * @param {Array<any>} arr The input array.
 * @returns {Array<any>} An array containing the mode(s).
 */
function mode(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  if (arr.length === 0) {
    return [];
  }

  const counts = {};
  let maxCount = 0;

  for (const item of arr) {
    counts[item] = (counts[item] || 0) + 1;
    if (counts[item] > maxCount) {
      maxCount = counts[item];
    }
  }

  const modes = [];
  for (const item in counts) {
    if (counts[item] === maxCount) {
      // Need to convert back to original type if numbers were keys
      modes.push(isNaN(Number(item)) ? item : Number(item));
    }
  }
  return modes;
}

module.exports = mode;
