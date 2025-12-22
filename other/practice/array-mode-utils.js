export const mode = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  const counts = {};
  let maxCount = 0;
  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] > maxCount) {
      maxCount = counts[num];
    }
  }
  const result = [];
  for (const num in counts) {
    if (counts[num] === maxCount) {
      result.push(Number(num));
    }
  }
  return result;
};
