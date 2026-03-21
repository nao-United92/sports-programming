const fibonacci = (n) => {
  if (n < 0) return [];
  if (n === 0) return [0];
  const seq = [0, 1];
  for (let i = 2; i <= n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.slice(0, n + 1);
};
module.exports = fibonacci;