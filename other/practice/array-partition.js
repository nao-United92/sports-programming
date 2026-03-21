const partition = (arr, fn) => {
  return arr.reduce(
    (acc, item) => {
      acc[fn(item) ? 0 : 1].push(item);
      return acc;
    },
    [[], []]
  );
};
module.exports = partition;