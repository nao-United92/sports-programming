const endsWith = (str, suffix) => {
  if (typeof str !== 'string' || typeof suffix !== 'string') {
    throw new TypeError('Both arguments must be strings');
  }
  return str.endsWith(suffix);
};

module.exports = { endsWith };
