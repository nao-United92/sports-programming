const fill = (arr, value, start = 0, end = arr.length) => {
  const result = [...arr];
  for (let i = start; i < end; i++) {
    result[i] = value;
  }
  return result;
};

module.exports = fill;
