/**
 * Linear interpolation between two numbers.
 * 
 * @param {number} start - The starting value.
 * @param {number} end - The ending value.
 * @param {number} t - The interpolation factor (usually between 0 and 1).
 * @returns {number} The interpolated value.
 */
function lerp(start, end, t) {
  return start + (end - start) * t;
}

module.exports = lerp;
