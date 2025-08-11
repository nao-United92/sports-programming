export const removeDuplicates = (array) => {
  if (!Array.isArray(array)) {
    return [];
  }
  return [...new Set(array)];
};
