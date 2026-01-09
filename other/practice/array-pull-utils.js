export const pull = (arr, ...values) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  const valuesToRemove = new Set(values);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!valuesToRemove.has(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};
