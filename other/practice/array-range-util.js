export const range = (start, end) => {
  if (start > end) {
    return [];
  }
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
};
