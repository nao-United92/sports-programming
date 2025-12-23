const without = (arr, ...values) => {
  return arr.filter(item => !values.includes(item));
};

module.exports = without;
