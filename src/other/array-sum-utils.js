const sum = (arr) => {
  if (!Array.isArray(arr)) {
    return 0;
  }
  return arr.reduce((acc, num) => acc + num, 0);
};

module.exports = { sum };
