const gcd = (...numbers) => {
  const _gcd = (x, y) => (!y ? x : _gcd(y, x % y));
  return [...numbers].reduce((a, b) => _gcd(a, b));
};

export { gcd };
