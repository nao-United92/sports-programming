/**
 * Checks if one array is a subsequence of another (order matters, but elements don't need to be contiguous).
 * @param {any[]} sub - The potential subsequence.
 * @param {any[]} seq - The sequence.
 * @returns {boolean} True if sub is a subsequence of seq.
 */
export const isSubsequenceOf = (sub, seq) => {
  let i = 0;
  let j = 0;
  while (i < sub.length && j < seq.length) {
    if (sub[i] === seq[j]) i++;
    j++;
  }
  return i === sub.length;
};
