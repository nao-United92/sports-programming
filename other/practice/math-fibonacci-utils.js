/**
 * Generates the Fibonacci sequence up to n elements.
 * 
 * @param {number} n - The number of elements to generate.
 * @returns {Array<number>} The Fibonacci sequence.
 */
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const seq = [0, 1];
  while (seq.length < n) {
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  }
  return seq;
}

module.exports = fibonacci;
