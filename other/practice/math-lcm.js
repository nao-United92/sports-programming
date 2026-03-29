const lcm = (a, b) => (a * b) / (!b ? a : (function gcd(x, y) { return !y ? x : gcd(y, x % y); })(a, b));

export { lcm };
