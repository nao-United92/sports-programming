const pull = (arr, ...values) => {
  const valuesToRemove = new Set(values);
  let i = 0;
  while (i < arr.length) {
    if (valuesToRemove.has(arr[i])) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  return arr;
};

export { pull };
