import { pipe } from './pipe-utils.js';

describe('pipe', () => {
  const add = (a, b) => a + b;
  const square = (n) => n * n;
  const double = (n) => n * 2;

  test('should return a function', () => {
    expect(typeof pipe()).toBe('function');
  });

  test('should pipe functions from left to right', () => {
    const piped = pipe(square, double);
    expect(piped(2)).toBe(8); // (2*2) * 2
  });

  test('should handle multiple functions', () => {
    const piped = pipe(square, double, (n) => n + 1);
    expect(piped(3)).toBe(19); // (3*3) * 2 + 1
  });

  test('should pass initial arguments to the first function', () => {
    const piped = pipe(add, square, double);
    expect(piped(2, 3)).toBe(50); // (2+3)^2 * 2
  });

  test('should return the identity function if no functions are provided', () => {
    const identity = pipe();
    expect(identity(5)).toBe(5);
    expect(identity('hello')).toBe('hello');
  });

  test('should return the single function if only one is provided', () => {
    const piped = pipe(square);
    expect(piped(4)).toBe(16);
  });
});