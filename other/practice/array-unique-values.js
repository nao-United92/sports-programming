export const getUniqueValues = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return [...new Set(arr)];
};