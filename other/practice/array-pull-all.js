const arrayPullAll = (arr, valuesToRemove) => {
  if (!Array.isArray(arr) || !Array.isArray(valuesToRemove)) {
    throw new TypeError('Expected both arguments to be arrays.');
  }

  const valuesSet = new Set(valuesToRemove);
  let i = arr.length;
  while (i--) {
    if (valuesSet.has(arr[i])) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

export default arrayPullAll;
