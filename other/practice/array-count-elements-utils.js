export const countElements = (arr) => {
  if (!Array.isArray(arr)) {
    return {};
  }
  return arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
};
