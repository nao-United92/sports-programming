const arrayPull = (arr, ...values) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  let i = arr.length;
  while (i--) {
    if (values.includes(arr[i])) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

export default arrayPull;
