const truncate = (str, length, ending = '...') => {
  if (typeof str !== 'string' || length < 0) {
    return '';
  }
  if (str.length <= length) {
    return str;
  }
  if (length <= ending.length) {
    return ending.substring(0, length);
  }
  return str.substring(0, length - ending.length) + ending;
};

module.exports = { truncate };
