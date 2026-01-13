
export const getNthElement = (arr, n) => {
  if (!arr || arr.length === 0) {
    return undefined;
  }
  const index = n >= 0 ? n : arr.length + n;
  return arr[index];
};
