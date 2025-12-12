const difference = (array, ...values) => {
  if (!Array.isArray(array)) {
    return [];
  }
  const flatValues = values.flat(Infinity);
  const valueSet = new Set(flatValues);
  return array.filter(el => !valueSet.has(el));
};

module.exports = { difference };
