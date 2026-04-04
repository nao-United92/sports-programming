const gcd = require('./nebula-math-gcd');

const lcm = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    throw new Error('Input must be numbers');
  }

  if (a === 0 || b === 0) {
    return 0;
  }

  a = Math.abs(a);
  b = Math.abs(b);

  return (a * b) / gcd(a, b);
};

module.exports = lcm;
