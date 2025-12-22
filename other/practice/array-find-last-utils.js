export const findLast = (arr, func) => {
  if (!Array.isArray(arr)) {
    return undefined;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
};
