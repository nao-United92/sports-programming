export const takeRight = (arr, n = 1) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  if (n <= 0) {
    return [];
  }
  return arr.slice(-n);
};
