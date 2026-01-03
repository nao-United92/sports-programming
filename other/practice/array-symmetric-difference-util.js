const symmetricDifference = (a, b) => {
  const sA = new Set(a);
  const sB = new Set(b);
  const diff = [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
  return diff;
};

module.exports = symmetricDifference;
