/**
 * Returns the mode(s) of an array (the values that appear most frequently).
 * @param {Array<any>} arr The array to find the mode(s) of.
 * @returns {Array<any>} An array containing the mode(s). Returns all unique elements if all elements appear only once. Returns an empty array for an empty input.
 */
export const mode = (arr) => {
  if (!arr || arr.length === 0) {
    return [];
  }

  const counts = new Map();
  arr.forEach(item => {
    counts.set(item, (counts.get(item) || 0) + 1);
  });

  let maxFreq = 0;
  for (const count of counts.values()) {
    if (count > maxFreq) {
      maxFreq = count;
    }
  }

  const modes = [];
  for (const [item, count] of counts.entries()) {
    if (count === maxFreq) {
      modes.push(item);
    }
  }

  // Sort for predictable order in results
  return modes.sort((a, b) => String(a).localeCompare(String(b)));
};
