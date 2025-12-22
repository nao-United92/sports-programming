export const deepCount = (arr) => {
  let count = 0;
  for (const item of arr) {
    count++;
    if (Array.isArray(item)) {
      count += deepCount(item);
    }
  }
  return count;
};
