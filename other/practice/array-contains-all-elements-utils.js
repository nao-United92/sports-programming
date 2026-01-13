
export const containsAllElements = (mainArr, valuesArr) => {
  if (!mainArr || !valuesArr) {
    return false;
  }
  if (valuesArr.length === 0) {
    return true; // An empty set of values is always "contained"
  }
  const mainSet = new Set(mainArr);
  return valuesArr.every(value => mainSet.has(value));
};
