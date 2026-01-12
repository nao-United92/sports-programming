export const fill = (n, value) => {
  if (n <= 0) {
    return [];
  }
  return Array(n).fill(value);
};
