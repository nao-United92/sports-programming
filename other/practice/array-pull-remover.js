export const pull = (arr, ...valuesToRemove) => {
  const values = new Set(valuesToRemove);
  let i = 0;
  while (i < arr.length) {
    if (values.has(arr[i])) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  return arr;
};
