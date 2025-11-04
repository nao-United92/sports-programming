/**
 * Maps a value from one range to another.
 * @param {number} value The value to map.
 * @param {number} inMin The minimum value of the input range.
 * @param {number} inMax The maximum value of the input range.
 * @param {number} outMin The minimum value of the output range.
 * @param {number} outMax The maximum value of the output range.
 * @returns {number} The mapped value.
 */
export const mapRange = (value, inMin, inMax, outMin, outMax) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

/**
 * Rounds a number to a specified number of decimal places.
 * @param {number} value The number to round.
 * @param {number} decimalPlaces The number of decimal places to round to.
 * @returns {number} The rounded number.
 */
export const roundToDecimal = (value, decimalPlaces) => {
  if (decimalPlaces < 0) {
    throw new Error('Decimal places cannot be negative.');
  }
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(value * factor) / factor;
};
