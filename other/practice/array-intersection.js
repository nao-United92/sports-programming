function intersection(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error('Both arguments must be arrays.');
  }
  const set1 = new Set(arr1);
  return arr2.filter(item => set1.has(item));
}

module.exports = intersection;
