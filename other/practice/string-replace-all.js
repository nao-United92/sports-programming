const replaceAll = (str, search, replacement) => {
  if (typeof str !== 'string' || typeof search !== 'string' || typeof replacement !== 'string') {
    throw new TypeError('All arguments must be strings');
  }
  return str.split(search).join(replacement);
};

module.exports = { replaceAll };
