export const sum = (arr) => {
  if (!Array.isArray(arr)) return 0;
  return arr.reduce((acc, val) => acc + val, 0);
};
