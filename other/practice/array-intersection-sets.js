export const intersectionSets = (a, b) => {
  const setB = new Set(b);
  return a.filter(x => setB.has(x));
};
