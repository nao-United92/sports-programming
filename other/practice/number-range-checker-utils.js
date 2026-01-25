const inRange = (num, start, end) => {
  if (end == null) {
    end = start;
    start = 0;
  }
  return num >= Math.min(start, end) && num < Math.max(start, end);
};

module.exports = { inRange };
