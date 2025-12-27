const xor = (...arrays) => {
  const flat = arrays.flat();
  const counts = new Map();
  for (const item of flat) {
    counts.set(item, (counts.get(item) || 0) + 1);
  }

  const result = [];
  for (const [item, count] of counts.entries()) {
    if (count % 2 !== 0) {
      result.push(item);
    }
  }
  return result;
};

module.exports = { xor };
