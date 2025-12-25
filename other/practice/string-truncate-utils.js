const truncate = (str, num, omission = '...') => {
  if (str.length <= num) {
    return str;
  }
  if (num <= omission.length) {
    return omission.slice(0, num);
  }
  return str.slice(0, num - omission.length) + omission;
};

module.exports = { truncate };