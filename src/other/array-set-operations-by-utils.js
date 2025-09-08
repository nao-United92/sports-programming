const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

const unionBy = (a, b, fn) => {
  const s = new Set(a.map(fn));
  return a.concat(b.filter(x => !s.has(fn(x))));
};

const symmetricDifferenceBy = (a, b, fn) => {
  const sA = new Set(a.map(fn));
  const sB = new Set(b.map(fn));
  return [...a.filter(x => !sB.has(fn(x))), ...b.filter(x => !sA.has(fn(x)))];
};

module.exports = { differenceBy, intersectionBy, unionBy, symmetricDifferenceBy };