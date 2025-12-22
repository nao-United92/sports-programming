export const deepFlatten = (arr) => {
  if (!Array.isArray(arr)) {
    return [arr];
  }
  return [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
};
