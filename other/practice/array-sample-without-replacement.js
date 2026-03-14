/**
 * Samples n unique elements from an array without replacement.
 * 
 * @param {Array} arr 
 * @param {number} n 
 * @returns {Array}
 */
const sampleWithoutReplacement = (arr, n) => {
  if (n <= 0) return [];
  if (n >= arr.length) return [...arr];
  
  const result = [...arr];
  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * (result.length - i)) + i;
    [result[i], result[randomIndex]] = [result[randomIndex], result[i]];
  }
  return result.slice(0, n);
};

module.exports = sampleWithoutReplacement;
