/**
 * Produces a random number between the inclusive `lower` and `upper` bounds.
 * If only one argument is provided a number between `0` and the given number is returned.
 * If `floating` is `true`, or if `lower` or `upper` are floats, a floating-point number is returned.
 *
 * @param {number} [lower=0] The lower bound.
 * @param {number} [upper=1] The upper bound.
 * @param {boolean} [floating] Specify returning a floating-point number.
 * @returns {number} Returns the random number.
 */
export const random = (lower = 0, upper = 1, floating) => {
  // Handle random() case: returns a float between 0 and 1
  if (arguments.length === 0) {
    const randVal = Math.random();
    console.log('Math.random() in random():', randVal); // Added comment to force re-evaluation
    return randVal;
  }

  // Handle random(upper) case
  if (arguments.length === 1) {
    upper = lower;
    lower = 0;
  }

  if (lower > upper) {
    [lower, upper] = [upper, lower];
  }

  // Determine if floating point is required
  const isFloating = floating || (lower % 1 !== 0) || (upper % 1 !== 0);

  if (isFloating) {
    return lower + (Math.random() * (upper - lower));
  } else {
    return Math.floor(lower + (Math.random() * (upper - lower + 1)));
  }
};