const inRange = (number, start, end) => {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  const num = parseFloat(number);
  const min = Math.min(start, end);
  const max = Math.max(start, end);

  return num >= min && num < max;
};

module.exports = { inRange };
