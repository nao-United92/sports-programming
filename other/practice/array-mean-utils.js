export const mean = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, val) => acc + val, 0) / arr.length;
};
