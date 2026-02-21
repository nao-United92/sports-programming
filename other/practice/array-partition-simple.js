
const partition = (array, predicate) => {
  return array.reduce(
    ([pass, fail], elem) => {
      return predicate(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]];
    },
    [[], []]
  );
};

module.exports = partition;
