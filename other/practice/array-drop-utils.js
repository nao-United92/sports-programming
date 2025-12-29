export const drop = (arr, n = 1) => {
  if (!arr || arr.length === 0) {
    return [];
  }
  if (n <= 0) {
    return [...arr]; // Return a shallow copy if n is 0 or negative
  }
  return arr.slice(n);
};