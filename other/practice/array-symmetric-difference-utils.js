const symmetricDifference = (a, b) => {
  const setA = new Set(a);
  const setB = new Set(b);
  const difference = new Set([...a.filter(x => !setB.has(x)), ...b.filter(x => !setA.has(x))]);
  return [...difference];
};

module.exports = {
  symmetricDifference
};