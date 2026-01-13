
export const maxByPredicate = (arr, predicate) => {
  if (!arr || arr.length === 0) {
    return undefined;
  }

  let maxElement = arr[0];
  let maxValue = predicate(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    const currentValue = predicate(arr[i]);
    if (currentValue > maxValue) {
      maxValue = currentValue;
      maxElement = arr[i];
    }
  }
  return maxElement;
};
