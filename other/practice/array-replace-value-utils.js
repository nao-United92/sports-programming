const replaceValue = (arr, oldValue, newValue) => {
  return arr.map((item) => (item === oldValue ? newValue : item));
};

module.exports = { replaceValue };
