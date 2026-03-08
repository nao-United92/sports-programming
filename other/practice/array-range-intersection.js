/**
 * Finds the intersection of two numeric ranges [a, b] and [c, d].
 * @param {number[]} range1 - [start, end]
 * @param {number[]} range2 - [start, end]
 * @returns {number[]|null} The intersecting range [start, end] or null if no intersection.
 */
export const rangeIntersection = (range1, range2) => {
  const start = Math.max(range1[0], range2[0]);
  const end = Math.min(range1[1], range2[1]);
  return start <= end ? [start, end] : null;
};
