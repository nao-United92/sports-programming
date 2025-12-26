const xor = (...arrays) => {
  return arrays.reduce((acc, arr) => {
    const other = arrays.filter(a => a !== arr).flat();
    const unique = arr.filter(item => !other.includes(item));
    return acc.concat(unique);
  }, []);
};

module.exports = {
  xor
};