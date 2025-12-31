// Calculates the union of multiple arrays
export const union = (...arrays) => {
  const flattened = [].concat(...arrays);
  return [...new Set(flattened)];
};