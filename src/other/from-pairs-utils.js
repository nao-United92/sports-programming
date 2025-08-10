export const fromPairs = (pairs) => {
  if (pairs === null || pairs === undefined) {
    return {};
  }
  // Object.fromEntries is the modern and correct tool for this.
  return Object.fromEntries(pairs);
};
