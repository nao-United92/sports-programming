export const symmetricDifference = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return [];
  }
  const sA = new Set(a);
  const sB = new Set(b);
  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};
