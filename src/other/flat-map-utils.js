export const flatMap = (arr, fn, thisArg) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  // Pass thisArg to map if provided
  return arr.map(fn, thisArg).flat();
};
