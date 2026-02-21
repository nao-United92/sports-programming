
const without = (array, ...values) => {
  const s = new Set(values);
  return array.filter(x => !s.has(x));
};

module.exports = without;
