/**
 * Converts a number to its ordinal string representation.
 * @param {number} n
 * @returns {string}
 */
export const toOrdinal = (n) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};
