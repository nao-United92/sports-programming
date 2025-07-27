/**
 * Clamps a number between an upper and lower bound.
 * @param {number} num The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} The clamped number.
 */
export function clamp(num, lower, upper) {
  return Math.min(Math.max(num, lower), upper);
}

/**
 * Maps a number from one range to another.
 * @param {number} num The number to map.
 * @param {number} inMin The lower bound of the input range.
 * @param {number} inMax The upper bound of the input range.
 * @param {number} outMin The lower bound of the output range.
 * @param {number} outMax The upper bound of the output range.
 * @returns {number} The mapped number.
 */
export function mapRange(num, inMin, inMax, outMin, outMax) {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

/**
 * Calculates the sum of numbers in an array.
 * @param {number[]} numbers The array of numbers.
 * @returns {number} The sum of the numbers.
 */
export function sum(numbers) {
  if (!Array.isArray(numbers)) {
    return 0;
  }
  return numbers.reduce((acc, num) => acc + num, 0);
}

/**
 * Calculates the average of numbers in an array.
 * @param {number[]} numbers The array of numbers.
 * @returns {number} The average of the numbers.
 */
export function average(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }
  return sum(numbers) / numbers.length;
}

/**
 * Finds the minimum number in an array.
 * @param {number[]} numbers The array of numbers.
 * @returns {number} The minimum number.
 */
export function min(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return Infinity;
  }
  return Math.min(...numbers);
}

/**
 * Finds the maximum number in an array.
 * @param {number[]} numbers The array of numbers.
 * @returns {number} The maximum number.
 */
export function max(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return -Infinity;
  }
  return Math.max(...numbers);
}

/**
 * Calculates the median of numbers in an array.
 * @param {number[]} numbers The array of numbers.
 * @returns {number} The median of the numbers.
 */
export function median(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return NaN;
  }
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sortedNumbers.length / 2);
  return sortedNumbers.length % 2 !== 0 ? sortedNumbers[mid] : (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2;
}

/**
 * Rounds a number to a specified number of decimal places.
 * @param {number} num The number to round.
 * @param {number} decimalPlaces The number of decimal places to round to. Defaults to 0.
 * @returns {number} The rounded number.
 */
export function round(num, decimalPlaces = 0) {
  if (typeof num !== 'number' || isNaN(num)) {
    return NaN;
  }
  const factor = 10 ** decimalPlaces;
  return Math.round(num * factor) / factor;
}

/**
 * Generates a random integer within a specified range (inclusive).
 * @param {number} min The minimum value (inclusive).
 * @param {number} max The maximum value (inclusive).
 * @returns {number} A random integer within the specified range.
 */
export function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Checks if a number is prime.
 * @param {number} num The number to check.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
export function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

/**
 * Calculates the factorial of a non-negative integer.
 * @param {number} num The number to calculate the factorial of.
 * @returns {number} The factorial of the number.
 */
export function factorial(num) {
  if (num < 0) return NaN;
  if (num === 0) return 1;
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

/**
 * Calculates the greatest common divisor (GCD) of two numbers.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The GCD of the two numbers.
 */
export function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

/**
 * Checks if a number is even.
 * @param {number} num The number to check.
 * @returns {boolean} True if the number is even, false otherwise.
 */
export function isEven(num) {
  return typeof num === 'number' && num % 2 === 0;
}
