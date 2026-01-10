const inRange = (num, start, end) => {
  if (typeof num !== 'number' || typeof start !== 'number') {
    throw new TypeError('Expected numbers for num and start arguments.');
  }

  // If end is not provided, swap start and num and set end to 0
  if (end === undefined) {
    end = start;
    start = 0;
  } else if (typeof end !== 'number') {
      throw new TypeError('Expected a number for the end argument if provided.');
  }

  // Ensure start is always less than or equal to end
  if (start > end) {
    [start, end] = [end, start];
  }

  return num >= start && num < end;
};

module.exports = { inRange };
