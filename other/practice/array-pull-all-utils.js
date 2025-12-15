const pullAll = (arr, valuesToRemove) => {
  const valuesToRemoveSet = new Set(valuesToRemove);
  let i = 0;
  while (i < arr.length) {
    if (valuesToRemoveSet.has(arr[i])) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  return arr;
};

module.exports = pullAll;
