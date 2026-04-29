/**
 * Returns true if the given number is a Harshad number.
 * A Harshad number (or niven number) is an integer that is divisible
 * by the sum of its digits.
 * @param {number} n
 * @returns {boolean}
 */
export const isHarshadNumber = (n) => {
  if (n <= 0) return false;
  const sum = String(n)
    .split('')
    .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  return n % sum === 0;
};
