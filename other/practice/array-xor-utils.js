export const xor = (...arrs) => {
  const flattened = arrs.flat();
  const counts = {};

  for (const item of flattened) {
    counts[item] = (counts[item] || 0) + 1;
  }

  return flattened.filter(item => counts[item] === 1);
};