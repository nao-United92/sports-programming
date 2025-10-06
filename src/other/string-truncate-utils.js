
const truncate = (str, length = 30, omission = '...') => {
  if (str.length <= length) {
    return str;
  }
  if (length <= omission.length) {
    return omission;
  }
  return str.slice(0, length - omission.length) + omission;
};

module.exports = { truncate };
