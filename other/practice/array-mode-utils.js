export const mode = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }

  const counts = arr.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});

  let maxCount = 0;
  for (const key in counts) {
    if (counts[key] > maxCount) {
      maxCount = counts[key];
    }
  }

  if (maxCount <= 1 && new Set(arr).size === arr.length) {
    return [];
  }

  const result = [];
  for (const key in counts) {
    if (counts[key] === maxCount) {
      // Convert key back to number if it's a numeric string
      result.push(isNaN(key) ? key : Number(key));
    }
  }

  return result.sort((a, b) => a - b);
};