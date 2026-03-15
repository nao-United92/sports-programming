/**
 * Rounds a number to the nearest step.
 * @param {number} num Number to round.
 * @param {number} step Step value.
 * @returns {number} The rounded number.
 */
export const roundToStep = (num, step) => Math.round(num / step) * step;
