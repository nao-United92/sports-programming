const fromPairsExtended = (pairs) => {
  if (!Array.isArray(pairs)) {
    return {};
  }

  const result = {};
  for (const pair of pairs) {
    if (Array.isArray(pair) && pair.length === 2) {
      result[pair[0]] = pair[1];
    }
  }

  return result;
};

module.exports = fromPairsExtended;
