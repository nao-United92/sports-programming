const sortObjectsByKey = (arr, key, order = 'asc') => {
  if (!Array.isArray(arr) || arr.some(item => typeof item !== 'object' || item === null)) {
    throw new TypeError('Expected an array of objects');
  }

  return [...arr].sort((a, b) => {
    const valA = a[key];
    const valB = b[key];

    if (valA < valB) {
      return order === 'asc' ? -1 : 1;
    }
    if (valA > valB) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
};

module.exports = { sortObjectsByKey };
