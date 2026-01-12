export const compact = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter(Boolean);
};
