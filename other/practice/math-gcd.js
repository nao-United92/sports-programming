// Calculates the greatest common divisor of two numbers
export const gcd = (a, b) => {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return NaN;
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
};
