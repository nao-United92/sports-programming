export const unique = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return [...new Set(arr)];
};
