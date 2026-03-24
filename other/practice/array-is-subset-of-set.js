function isSubsetOf(subset, superset) {
  if (!Array.isArray(subset) || !Array.isArray(superset)) {
    throw new Error('Inputs must be arrays');
  }
  const set = new Set(superset);
  return subset.every(item => set.has(item));
}
module.exports = isSubsetOf;
