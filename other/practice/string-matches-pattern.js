const matchesPattern = (str, pattern) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for the first argument');
  }
  if (!(pattern instanceof RegExp)) {
    throw new TypeError('Expected a RegExp object for the second argument');
  }

  return pattern.test(str);
};

module.exports = { matchesPattern };
