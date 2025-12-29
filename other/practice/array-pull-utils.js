export const pull = (arr, ...values) => {
  const valueSet = new Set(values);
  let i = 0;
  while (i < arr.length) {
    if (valueSet.has(arr[i])) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  return arr;
};