function repeatString(str, count) {
  if (typeof str !== 'string') {
    throw new Error('First argument must be a string.');
  }
  if (typeof count !== 'number' || count < 0 || !Number.isInteger(count)) {
    throw new Error('Second argument (count) must be a non-negative integer.');
  }
  return str.repeat(count);
}

module.exports = repeatString;
