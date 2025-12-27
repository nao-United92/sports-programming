const takeAll = (arr, n = 1) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  // Ensure n is not negative. If negative, treat as 0.
  const effectiveN = Math.max(0, n);
  return arr.slice(0, effectiveN);
};

export default takeAll;