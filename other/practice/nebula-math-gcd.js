const gcd = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    throw new Error('Input must be numbers');
  }

  a = Math.abs(a);
  b = Math.abs(b);

  while (b) {
    a %= b;
    [a, b] = [b, a];
  }
  return a;
};

module.exports = gcd;
