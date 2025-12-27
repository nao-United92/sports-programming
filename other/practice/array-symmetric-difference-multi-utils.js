const symmetricDifference = (...arrays) => {
  const flattened = arrays.flat();
  const counts = new Map();

  for (const item of flattened) {
    counts.set(item, (counts.get(item) || 0) + 1);
  }

  return [...new Set(flattened.filter(item => counts.get(item) % 2 !== 0))];
};

export default symmetricDifference;