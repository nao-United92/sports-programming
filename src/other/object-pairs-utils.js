export const toPairs = (object) => {
  if (object == null) {
    return [];
  }
  return Object.entries(object);
};

export const fromPairs = (pairs) => {
  const result = {};
  if (pairs == null) {
    return result;
  }
  for (const pair of pairs) {
    if (pair && pair.length === 2) {
      result[pair[0]] = pair[1];
    }
  }
  return result;
};
