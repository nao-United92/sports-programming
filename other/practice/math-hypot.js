/**
 * Calculates the square root of the sum of squares of its arguments.
 * @param {...number} args Numbers to calculate hypotenuse for.
 * @returns {number} The hypotenuse.
 */
export const hypot = (...args) => Math.sqrt(args.reduce((sum, n) => sum + n * n, 0));
