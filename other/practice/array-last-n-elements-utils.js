// Returns the last N elements of an array.
export const lastNElements = (arr, n = 1) => {
  if (!Array.isArray(arr) || n <= 0) {
    return [];
  }
  return arr.slice(-n);
};