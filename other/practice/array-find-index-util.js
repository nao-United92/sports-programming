export const findIndex = (arr, fn) => {
  if (!Array.isArray(arr)) {
    return -1;
  }
  return arr.findIndex(fn);
};
