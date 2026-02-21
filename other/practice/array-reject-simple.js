
const reject = (array, predicate) => {
  return array.filter((...args) => !predicate(...args));
};

module.exports = reject;
