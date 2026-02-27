const intersectionBy = (iteratee, ...arrays) => {
  if (arrays.length < 2) return arrays[0] || [];
  
  const mapped = arrays.map(arr => arr.map(item => iteratee(item)));
  
  return arrays[0].filter((item, index) => {
    const targetVal = mapped[0][index];
    return mapped.slice(1).every(arr => arr.includes(targetVal));
  });
};

module.exports = intersectionBy;
