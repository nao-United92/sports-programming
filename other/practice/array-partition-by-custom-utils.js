
export const partitionByCustom = (arr, predicate) => {
  const trueArr = [];
  const falseArr = [];
  for (const item of arr) {
    if (predicate(item)) {
      trueArr.push(item);
    } else {
      falseArr.push(item);
    }
  }
  return [trueArr, falseArr];
};
