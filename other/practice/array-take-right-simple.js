
const takeRight = (array, n = 1) => {
  if (n === 0) return [];
  return array.slice(-n);
};

module.exports = takeRight;
