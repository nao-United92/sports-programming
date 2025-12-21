const xorBy = (a, b, iteratee) => {
  const s = new Set(b.map(iteratee));
  return a.filter(x => !s.has(iteratee(x)));
};

export default xorBy;
