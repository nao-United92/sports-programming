import { gcd } from './math-gcd.js';

// Calculates the least common multiple of two numbers
export const lcm = (a, b) => {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return NaN;
  if (a === 0 || b === 0) return 0;
  return Math.abs((a * b) / gcd(a, b));
};
