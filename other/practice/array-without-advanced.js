const withoutAdvanced = (array, ...values) => {
  if (!Array.isArray(array)) return [];
  const valuesSet = new Set(values);
  return array.filter(item => !valuesSet.has(item));
};

module.exports = withoutAdvanced;
