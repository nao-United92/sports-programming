export const pullAt = (arr, pullArr) => {
  let removed = [];
  let pulled = arr
    .map((v, i) => (!pullArr.includes(i) ? v : (removed.push(v), null)))
    .filter(v => v);
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return removed;
};
