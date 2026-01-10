const truncate = (str, length, ellipsis = '...') => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for the first argument.');
  }
  if (typeof length !== 'number' || length < 0) {
    throw new TypeError('Expected a non-negative number for the second argument.');
  }
  if (str.length <= length) {
    return str;
  }
  if (length <= ellipsis.length) {
      return str.slice(0, length);
  }
  return str.slice(0, length - ellipsis.length) + ellipsis;
};

module.exports = { truncate };
