/**
 * Returns true if the given number is a perfect power.
 * A perfect power is a positive integer n that can be expressed as n = m^k,
 * where m > 1 and k > 1 are integers.
 * @param {number} n
 * @returns {boolean}
 */
export const isPerfectPower = (n) => {
  if (n <= 1) return false;
  for (let m = 2; m * m <= n; m++) {
    let p = m * m;
    while (p <= n && p > 0) {
      if (p === n) return true;
      p *= m;
    }
  }
  return false;
};
