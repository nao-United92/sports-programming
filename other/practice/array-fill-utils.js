const fill = (array, value, start = 0, end) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for the first argument.');
  }

  const length = array.length;
  const fillStart = Math.max(0, start < 0 ? length + start : start);
  const fillEnd = Math.min(length, end === undefined ? length : (end < 0 ? length + end : end));

  for (let i = fillStart; i < fillEnd; i++) {
    array[i] = value;
  }

  return array;
};

module.exports = { fill };
