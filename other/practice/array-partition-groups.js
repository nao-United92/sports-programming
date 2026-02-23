export const partitionGroups = (arr, predicate) => {
  return arr.reduce(
    (acc, val) => {
      acc[predicate(val) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
};
