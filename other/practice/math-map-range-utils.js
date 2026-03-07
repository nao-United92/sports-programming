/**
 * Maps a value from one range to another.
 * 
 * @param {number} value - The value to map.
 * @param {number} inMin - Lower boundary of the source range.
 * @param {number} inMax - Upper boundary of the source range.
 * @param {number} outMin - Lower boundary of the target range.
 * @param {number} outMax - Upper boundary of the target range.
 * @returns {number} The mapped value.
 */
function mapRange(value, inMin, inMax, outMin, outMax) {
  if (inMax === inMin) return outMin;
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

module.exports = mapRange;
