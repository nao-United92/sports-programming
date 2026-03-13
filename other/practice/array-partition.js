export const partition = (arr, predicate) =>
  arr.reduce(
    (acc, val) => {
      acc[predicate(val) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
