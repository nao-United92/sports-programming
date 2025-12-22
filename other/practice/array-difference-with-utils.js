export const differenceWith = (arr, val, comp) => {
  return arr.filter(a => !val.some(b => comp(a, b)));
};
