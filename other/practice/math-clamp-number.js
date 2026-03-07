/**
 * Clamps a number between a minimum and maximum value.
 * 
 * @param {number} num - The number to clamp.
 * @param {number} min - The lower boundary.
 * @param {number} max - The upper boundary.
 * @returns {number} The clamped value.
 */
function clampNumber(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

module.exports = clampNumber;
