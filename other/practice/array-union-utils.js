export const union = (...arrs) => {
  return [...new Set(arrs.flat())];
};