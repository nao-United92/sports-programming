import { mathGCD } from './math-gcd-utils';

export const mathLCM = (a, b) => {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / mathGCD(a, b);
};
