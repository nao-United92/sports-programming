export const difference = (arr, ...others) => {
  const otherValues = new Set(others.flat());
  return arr.filter(item => !otherValues.has(item));
};
