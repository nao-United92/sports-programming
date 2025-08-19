/**
 * Rounds a number to a specified number of decimal places.
 * @param {number} num The number to round.
 * @param {number} decimalPlaces The number of decimal places to round to.
 * @returns {number} The rounded number.
 */
function roundToDecimal(num, decimalPlaces) {
  if (typeof num !== 'number' || isNaN(num)) {
    return NaN; // Handle non-numeric input
  }
  if (decimalPlaces < 0) {
    return num; // Negative decimal places don't make sense for rounding
  }
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(num * factor) / factor;
}

module.exports = { roundToDecimal };