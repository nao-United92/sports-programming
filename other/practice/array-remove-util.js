export const remove = (arr, fn) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter(fn);
};
