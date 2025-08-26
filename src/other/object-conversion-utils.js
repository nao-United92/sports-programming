export const invert = (obj) => {
  const result = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[obj[key]] = key;
    }
  }
  return result;
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
