// Gets `n` random elements at unique keys from `array` up to the size of `array`.
export const sampleN = (arr, n = 1) => {
  const len = arr.length;
  if (n <= 0 || len === 0) {
    return [];
  }
  const result = [];
  const indices = new Set();

  while (result.length < n && result.length < len) {
    const randomIndex = Math.floor(Math.random() * len);
    if (!indices.has(randomIndex)) {
      indices.add(randomIndex);
      result.push(arr[randomIndex]);
    }
  }
  return result;
};