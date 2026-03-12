const truncate = (str, length = 10, suffix = '...') => {
  if (str.length <= length) return str;
  return str.substring(0, length) + suffix;
};

module.exports = truncate;
