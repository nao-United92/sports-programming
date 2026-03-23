// Remove duplicate values from an array
export const unique = (array) => {
  if (!Array.isArray(array)) return [];
  return [...new Set(array)];
};
