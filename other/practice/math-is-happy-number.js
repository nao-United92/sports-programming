/**
 * Returns true if the number is a Happy number.
 * A happy number is a number which eventually reaches 1 when replaced by the sum
 * of the squares of its digits.
 * @param {number} n
 * @returns {boolean}
 */
export const isHappyNumber = (n) => {
  const seen = new Set();
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = String(n)
      .split('')
      .reduce((acc, digit) => acc + Math.pow(parseInt(digit, 10), 2), 0);
  }
  return n === 1;
};
