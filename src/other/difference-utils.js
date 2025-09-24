export const difference = (arr, ...values) => {
  const valueSet = new Set(values.flat());
  return arr.filter(x => !valueSet.has(x));
};