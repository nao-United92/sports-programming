/**
 * Rotates an array in-place by k positions.
 * @param {any[]} arr 
 * @param {number} k 
 * @returns {any[]}
 */
const rotateInPlace = (arr, k) => {
  if (arr.length === 0) return arr;
  const n = arr.length;
  k = ((k % n) + n) % n; // Handle negative k
  if (k === 0) return arr;

  const reverse = (start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };

  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);

  return arr;
};

module.exports = rotateInPlace;
