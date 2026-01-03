const unionBy = (a, b, fn) => {
  const s = new Set(a.map(fn));
  return a.concat(b.filter(x => !s.has(fn(x))));
};

module.exports = unionBy;
