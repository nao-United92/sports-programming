const partitionAdvanced = (array, predicate) => {
  if (!Array.isArray(array)) return [[], []];
  return array.reduce(
    (acc, item, index) => {
      acc[predicate(item, index, array) ? 0 : 1].push(item);
      return acc;
    },
    [[], []]
  );
};

module.exports = partitionAdvanced;
