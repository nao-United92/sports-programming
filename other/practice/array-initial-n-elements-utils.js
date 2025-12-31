// Returns the first N elements of an array.
export const initialNElements = (arr, n = 1) => {
  if (!Array.isArray(arr) || n <= 0) {
    return [];
  }
  return arr.slice(0, n);
};