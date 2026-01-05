const arrayHasDuplicates = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the argument.');
  }
  const seen = new Set();
  for (const item of arr) {
    if (seen.has(item)) {
      return true;
    }
    seen.add(item);
  }
  return false;
};

module.exports = arrayHasDuplicates;
