/**
 * Interleaves multiple arrays.
 * @param {...any[]} arrays - The arrays to interleave.
 * @returns {any[]} The interleaved array.
 */
export const interleaveMany = (...arrays) => {
  const maxLength = Math.max(...arrays.map((a) => a.length));
  const result = [];
  for (let i = 0; i < maxLength; i++) {
    for (const arr of arrays) {
      if (i < arr.length) result.push(arr[i]);
    }
  }
  return result;
};
