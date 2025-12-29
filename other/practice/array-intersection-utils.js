export const intersection = (...arrays) => {
  if (arrays.length === 0) {
    return [];
  }

  // Convert the first array to a Set for efficient lookup
  const firstArraySet = new Set(arrays[0]);

  // Iterate over the rest of the arrays and filter elements
  // that are present in all previous arrays.
  return arrays.slice(1).reduce((acc, currentArray) => {
    const currentArraySet = new Set(currentArray);
    return acc.filter(item => currentArraySet.has(item));
  }, [...firstArraySet]); // Start with unique elements from the first array
};