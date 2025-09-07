export const sample = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

export const sampleSize = (arr, n = 1) => {
  if (!Array.isArray(arr) || arr.length === 0 || n <= 0) {
    return [];
  }

  const result = [];
  const clonedArr = [...arr];
  let len = clonedArr.length;
  let selections = Math.min(n, len);

  while (selections--) {
    const rand = Math.floor(Math.random() * len);
    result.push(clonedArr[rand]);
    const lastElement = clonedArr[len - 1];
    clonedArr[rand] = lastElement;
    len--;
  }
  return result;
};
