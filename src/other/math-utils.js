/**
 * Clamps a number between an upper and lower bound.
 * @param {number} num The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} The clamped number.
 */
export function clamp(num, lower, upper) {
  return Math.min(Math.max(num, lower), upper);
}

/**
 * Maps a number from one range to another.
 * @param {number} num The number to map.
 * @param {number} inMin The lower bound of the input range.
 * @param {number} inMax The upper bound of the input range.
 * @param {number} outMin The lower bound of the output range.
 * @param {number} outMax The upper bound of the output range.
 * @returns {number} The mapped number.
 */
export function mapRange(num, inMin, inMax, outMin, outMax) {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
