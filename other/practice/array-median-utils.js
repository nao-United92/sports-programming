export const median = (arr) => {
  if (!Array.isArray(arr) || arr.some(isNaN)) {
    throw new Error("The argument must be an array of numbers.");
  }
  if (arr.length === 0) {
    return null;
  }

  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
};