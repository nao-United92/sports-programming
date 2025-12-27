const takeRightAll = (arr, n = 1) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  const effectiveN = Math.max(0, n);
  if (effectiveN === 0) {
    return [];
  }
  return arr.slice(-effectiveN);
};

export default takeRightAll;