/**
 * Checks if one array is a subset of another (contains all elements).
 * @param {any[]} subset - Potential subset.
 * @param {any[]} superset - Potential superset.
 * @returns {boolean} True if all elements of subset are in superset.
 */
export const isSubsetOf = (subset, superset) => {
  const set = new Set(superset);
  return subset.every(x => set.has(x));
};
