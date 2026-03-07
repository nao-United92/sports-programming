/**
 * Rounds a number to a specific precision.
 * 
 * @param {number} num - The number to round.
 * @param {number} precision - The number of decimal places.
 * @returns {number} The rounded number.
 */
function roundToPrecision(num, precision = 0) {
  const factor = Math.pow(10, precision);
  return Math.round(num * factor) / factor;
}

module.exports = roundToPrecision;
