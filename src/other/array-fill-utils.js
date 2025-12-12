const fill = (arr, value, start = 0, end = arr.length) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  const newArr = [...arr];
  const normalizedStart = Math.max(0, start);
  const normalizedEnd = Math.min(newArr.length, end);

  for (let i = normalizedStart; i < normalizedEnd; i++) {
    newArr[i] = value;
  }
  return newArr;
};

module.exports = { fill };