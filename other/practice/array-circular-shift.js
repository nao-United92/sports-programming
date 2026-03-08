/**
 * Circularly shifts an array by a given number of positions.
 * @param {any[]} arr - The input array.
 * @param {number} n - Number of positions to shift (positive for right, negative for left).
 * @returns {any[]} The shifted array.
 */
export const circularShift = (arr, n) => {
  if (arr.length === 0) return [];
  const shift = ((n % arr.length) + arr.length) % arr.length;
  if (shift === 0) return [...arr];
  
  return [...arr.slice(-shift), ...arr.slice(0, -shift)];
};
