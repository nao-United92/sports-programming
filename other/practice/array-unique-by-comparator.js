function uniqueByComparator(array, comparator) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  return array.filter((item, index, self) => 
    index === self.findIndex((t) => comparator(t, item))
  );
}
module.exports = uniqueByComparator;
