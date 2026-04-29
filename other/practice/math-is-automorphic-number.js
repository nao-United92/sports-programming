/**
 * Returns true if the number is an Automorphic number.
 * An Automorphic number is a number whose square ends with the number itself.
 * Example: 5^2 = 25, 6^2 = 36, 25^2 = 625.
 * @param {number} n
 * @returns {boolean}
 */
export const isAutomorphicNumber = (n) => {
  if (n < 0) return false;
  const square = n * n;
  return String(square).endsWith(String(n));
};
