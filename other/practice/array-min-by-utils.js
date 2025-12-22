export const minBy = (arr, fn) => {
  if (!arr || arr.length === 0) {
    return undefined;
  }
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (fn(arr[i]) < fn(min)) {
      min = arr[i];
    }
  }
  return min;
};
