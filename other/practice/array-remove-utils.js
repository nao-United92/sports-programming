export const remove = (arr, func) => {
  let removed = [];
  let kept = [];
  arr.forEach(item => {
    if (func(item)) {
      removed.push(item);
    } else {
      kept.push(item);
    }
  });
  arr.length = 0;
  kept.forEach(item => arr.push(item));
  return removed;
};
