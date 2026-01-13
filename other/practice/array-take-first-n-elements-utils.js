
export const takeFirstNElements = (arr, n) => {
  if (!arr || n <= 0) {
    return [];
  }
  return arr.slice(0, n);
};
