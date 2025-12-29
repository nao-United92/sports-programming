export const take = (arr, n = 1) => {
  if (!arr || arr.length === 0) {
    return [];
  }
  if (n <= 0) {
    return [];
  }
  return arr.slice(0, n);
};