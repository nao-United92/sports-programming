const repeatString = (str, num) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for the first argument');
  }
  if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
    throw new TypeError('Expected a non-negative integer for the second argument');
  }

  let result = '';
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
};

module.exports = { repeatString };
