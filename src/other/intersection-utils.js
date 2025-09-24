export const intersection = (arr, ...arrays) => {
  const sets = arrays.map(a => new Set(a));
  return [...new Set(arr)].filter(x => sets.every(s => s.has(x)));
};