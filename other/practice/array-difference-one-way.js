function differenceOneWay(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error('Both arguments must be arrays.');
  }
  const set2 = new Set(arr2);
  return arr1.filter(item => !set2.has(item));
}

module.exports = differenceOneWay;
