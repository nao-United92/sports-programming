function rotateRightSteps(array, n = 1) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  const len = array.length;
  if (len === 0) return [];
  const shift = n % len;
  if (shift === 0) return [...array];
  return array.slice(-shift).concat(array.slice(0, -shift));
}
module.exports = rotateRightSteps;
