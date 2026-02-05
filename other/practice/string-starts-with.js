const startsWith = (str, prefix) => {
  if (typeof str !== 'string' || typeof prefix !== 'string') {
    throw new TypeError('Both arguments must be strings');
  }
  return str.startsWith(prefix);
};

module.exports = { startsWith };
