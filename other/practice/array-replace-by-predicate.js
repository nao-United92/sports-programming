function replaceByPredicate(array, predicate, newValue) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  return array.map((item, index) => 
    predicate(item, index, array) ? newValue : item
  );
}
module.exports = replaceByPredicate;
