const matches = (str, pattern) => {
  if (typeof str !== 'string') {
    return false;
  }
  return new RegExp(pattern).test(str);
};

module.exports = { matches };
