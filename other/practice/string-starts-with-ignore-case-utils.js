const startsWithIgnoreCase = (str, prefix) => {
  if (typeof str !== 'string' || typeof prefix !== 'string') {
    throw new Error('Both arguments must be strings.');
  }
  return str.toLowerCase().startsWith(prefix.toLowerCase());
};

module.exports = startsWithIgnoreCase;