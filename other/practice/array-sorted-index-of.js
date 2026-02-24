export const sortedIndexOf = (arr, val) => {
  let low = 0, high = arr.length;
  while (low < high) {
    const mid = (low + high) >>> 1;
    if (arr[mid] < val) low = mid + 1;
    else high = mid;
  }
  return low;
};
