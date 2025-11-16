/**
 * Checks if a number is between a start and end range.
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} True if the number is in the range, false otherwise.
 */
export const inRange = (number, start, end) => {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  return number >= Math.min(start, end) && number < Math.max(start, end);
};

/**
 * Generates a random integer within a given range.
 * @param {number} min The minimum value (inclusive).
 * @param {number} max The maximum value (inclusive).
 * @returns {number} The random integer.
 */
export const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Calculates the greatest common divisor (GCD) of two numbers.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The GCD.
 */
export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

/**
 * Calculates the least common multiple (LCM) of two numbers.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The LCM.
 */
export const lcm = (a, b) => {
  return Math.abs(a * b) / gcd(a, b);
};
