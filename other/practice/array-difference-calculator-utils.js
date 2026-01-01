const difference = (array, ...values) => {
  if (!Array.isArray(array)) {
    return [];
  }
  const valuesSet = new Set(values.flat());
  return array.filter(x => !valuesSet.has(x));
};

module.exports = { difference };
