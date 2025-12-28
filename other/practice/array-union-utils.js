const union = (...arrays) => {
  const combined = arrays.reduce((acc, arr) => acc.concat(arr), []);
  return [...new Set(combined)];
};

module.exports = { union };
