
export const minByPredicate = (arr, predicate) => {
  if (!arr || arr.length === 0) {
    return undefined;
  }

  let minElement = arr[0];
  let minValue = predicate(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    const currentValue = predicate(arr[i]);
    if (currentValue < minValue) {
      minValue = currentValue;
      minElement = arr[i];
    }
  }
  return minElement;
};
