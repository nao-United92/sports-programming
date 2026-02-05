const difference = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError('Both arguments must be arrays');
  }
  const s = new Set(arr2);
  return arr1.filter(x => !s.has(x));
};

module.exports = { difference };
