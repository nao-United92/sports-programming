const inRange = (num, start, end) => {
  if (typeof num !== 'number' || isNaN(num)) { // number型でないかNaNの場合はfalse
    return false;
  }

  if (end === undefined) {
    end = start;
    start = 0;
  }
  return num >= Math.min(start, end) && num < Math.max(start, end);
};

module.exports = { inRange };
