const union = (...arrays) => {
  const flattened = arrays.flat();
  return [...new Set(flattened)];
};

module.exports = { union };
