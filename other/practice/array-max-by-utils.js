export const maxBy = (arr, fn) => {
  if (!arr || arr.length === 0) {
    return undefined;
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (fn(arr[i]) > fn(max)) {
      max = arr[i];
    }
  }
  return max;
};
