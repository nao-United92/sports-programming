export const fromPairs = (pairs) => {
  if (!Array.isArray(pairs)) {
    return {};
  }
  const obj = {};
  for (const pair of pairs) {
    if (Array.isArray(pair) && pair.length === 2) {
      obj[pair[0]] = pair[1];
    }
  }
  return obj;
};
