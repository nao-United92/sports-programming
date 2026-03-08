/**
 * Checks if one array is a superset of another.
 * @param {any[]} superset - Potential superset.
 * @param {any[]} subset - Potential subset.
 * @returns {boolean} True if superset contains all elements of subset.
 */
export const isSupersetOf = (superset, subset) => {
  const set = new Set(superset);
  return subset.every(x => set.has(x));
};
