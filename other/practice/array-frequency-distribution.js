/**
 * Calculates the frequency distribution of elements in an array.
 * Returns an object where keys are elements and values are their relative frequencies (0 to 1).
 * 
 * @param {Array} arr 
 * @returns {Object}
 */
const frequencyDistribution = (arr) => {
  if (arr.length === 0) return {};
  const counts = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  
  const distribution = {};
  for (const key in counts) {
    distribution[key] = counts[key] / arr.length;
  }
  return distribution;
};

module.exports = frequencyDistribution;
