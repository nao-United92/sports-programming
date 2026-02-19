
const arrayPartitionByCondition = (arr, condition) => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }
  return arr.reduce(
    (acc, val) => {
      acc[condition(val) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
};

module.exports = arrayPartitionByCondition;
