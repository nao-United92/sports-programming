const fromPairs = (pairs) => {
  if (!Array.isArray(pairs)) {
    return {};
  }

  return pairs.reduce((obj, pair) => {
    if (Array.isArray(pair) && pair.length === 2) {
      obj[pair[0]] = pair[1];
    }
    return obj;
  }, {});
};

module.exports = { fromPairs };
