const truncate = (str, length = 30, omission = '...') => {
  if (typeof str !== 'string') {
    return '';
  }
  if (str.length <= length) {
    return str;
  }
  if (length <= omission.length) { // lengthがomissionの長さ以下の場合はomissionだけ返す
    return omission;
  }
  // Truncate the string and append the omission
  const sliceLength = length - omission.length;
  return str.slice(0, sliceLength) + omission;
};

module.exports = { truncate };
