export const fill = (array, value, start = 0, end = array.length) => {
  const length = array.length;
  start = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
  end = end < 0 ? Math.max(length + end, 0) : Math.min(end, length);

  for (let i = start; i < end; i++) {
    array[i] = value;
  }
  return array;
};

export const sortedIndex = (array, value) => {
  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] < value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return high;
};
