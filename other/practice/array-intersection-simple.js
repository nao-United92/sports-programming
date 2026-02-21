
const intersection = (a, b) => {
  const s = new Set(b);
  return [...new Set(a)].filter(x => s.has(x));
};

module.exports = intersection;
