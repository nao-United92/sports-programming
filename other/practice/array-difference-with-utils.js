const differenceWith = (array, values, comparator) => {
  if (!Array.isArray(array) || !Array.isArray(values)) {
    return Array.isArray(array) ? [...array] : [];
  }
  if (typeof comparator !== 'function') {
    throw new Error('Comparator function must be provided.');
  }

  return array.filter(item => 
    !values.some(valueToExclude => comparator(item, valueToExclude))
  );
};

module.exports = { differenceWith };
