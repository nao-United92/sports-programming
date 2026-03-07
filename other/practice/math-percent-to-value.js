/**
 * Calculates the value corresponding to a percentage of a total.
 * 
 * @param {number} percent - The percentage.
 * @param {number} total - The total value.
 * @returns {number} The calculated value.
 */
function percentToValue(percent, total) {
  return (percent / 100) * total;
}

module.exports = percentToValue;
