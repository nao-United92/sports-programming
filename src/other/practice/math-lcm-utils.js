import { gcd } from './math-gcd-utils.js';

export const lcm = (a, b) => {
  if (a === 0 || b === 0) {
    return 0;
  }
  return Math.abs(a * b) / gcd(a, b);
};
