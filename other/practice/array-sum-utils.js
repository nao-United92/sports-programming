const sum = (array) => {
  if (!Array.isArray(array)) {
    return 0;
  }
  return array.reduce((acc, current) => {
    const num = Number(current);
    return acc + (Number.isNaN(num) ? 0 : num);
  }, 0);
};

module.exports = sum;
