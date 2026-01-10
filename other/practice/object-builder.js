const fromPairs = (pairs) => {
  if (!Array.isArray(pairs)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  const result = {};
  for (const pair of pairs) {
    if (!Array.isArray(pair) || pair.length !== 2) {
      throw new TypeError('Each element in the array must be a key-value pair (an array of two elements).');
    }
    result[pair[0]] = pair[1];
  }
  return result;
};

module.exports = { fromPairs };
