/**
 * Rotates an array to the right by k steps.
 * 
 * @param {Array} arr - The array to rotate
 * @param {number} k - The number of steps to rotate to the right
 * @returns {Array} - The rotated array
 */
function rotateToRightAdvanced(arr, k) {
  if (!Array.isArray(arr) || arr.length === 0) return arr;
  const steps = k % arr.length;
  if (steps === 0) return [...arr];
  
  return [...arr.slice(-steps), ...arr.slice(0, -steps)];
}

module.exports = rotateToRightAdvanced;
