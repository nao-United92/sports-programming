const truncate = (str, num) => {
  if (typeof str !== 'string') {
    return '';
  }
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
};

module.exports = {
  truncate
};