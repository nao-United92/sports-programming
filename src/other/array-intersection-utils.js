const intersection = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return [];
  }
  const set1 = new Set(arr1);
  return [...new Set(arr2.filter(item => set1.has(item)))];
};

module.exports = { intersection };