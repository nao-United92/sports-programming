// Calculates the symmetric difference between two arrays
export const symmetricDifference = (a, b) => {
  const sA = new Set(a);
  const sB = new Set(b);
  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};