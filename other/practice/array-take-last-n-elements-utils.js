
export const takeLastNElements = (arr, n) => {
  if (!arr || n <= 0) {
    return [];
  }
  return arr.slice(Math.max(arr.length - n, 0));
};
