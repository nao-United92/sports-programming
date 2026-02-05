const times = (arr, count) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  if (typeof count !== 'number' || count < 0 || !Number.isInteger(count)) {
    throw new TypeError('Count must be a non-negative integer');
  }

  if (count === 0) {
    return [];
  }

  return Array.from({ length: count }, () => arr).flat();
};

module.exports = { times };