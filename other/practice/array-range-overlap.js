/**
 * Checks if two numeric ranges [a, b] and [c, d] overlap.
 * @param {number[]} range1 - [start, end]
 * @param {number[]} range2 - [start, end]
 * @returns {boolean} True if they overlap, false otherwise.
 */
export const rangeOverlap = (range1, range2) => {
  const [s1, e1] = range1;
  const [s2, e2] = range2;
  return Math.max(s1, s2) <= Math.min(e1, e2);
};
