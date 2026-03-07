/**
 * Calculates the percentage of a value relative to a total.
 * 
 * @param {number} value - The part value.
 * @param {number} total - The total value.
 * @returns {number} The calculated percentage.
 */
function valueToPercent(value, total) {
  if (total === 0) return 0;
  return (value / total) * 100;
}

module.exports = valueToPercent;
