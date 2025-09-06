
export const flatten = (array) => {
  if (!Array.isArray(array)) {
    return [];
  }
  return [].concat(...array);
};
