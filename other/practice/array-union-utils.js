export const union = (...arrays) => {
  const combined = arrays.flat();
  return [...new Set(combined)];
};