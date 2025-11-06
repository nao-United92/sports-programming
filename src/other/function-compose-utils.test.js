import { compose } from './function-compose-utils.js';

describe('compose', () => {
  const add1 = (x) => x + 1;
  const multiply2 = (x) => x * 2;
  const subtract3 = (x) => x - 3;
  const toString = (x) => String(x);

  test('should compose a single function', () => {
    const composed = compose(add1);
    expect(composed(5)).toBe(6);
  });

  test('should compose multiple functions from right to left', () => {
    const composed = compose(subtract3, multiply2, add1);
    // (5 + 1) * 2 - 3 = 9
    expect(composed(5)).toBe(9);
  });

  test('should handle functions with multiple arguments for the rightmost function', () => {
    const add = (a, b) => a + b;
    const composed = compose(multiply2, add);
    // (2 + 3) * 2 = 10
    expect(composed(2, 3)).toBe(10);
  });

  test('should handle different types of functions', () => {
    const composed = compose(toString, multiply2, add1);
    // (5 + 1) * 2 = 12, then '12'
    expect(composed(5)).toBe('12');
  });

  test('should return a function that returns the first argument if no functions are provided', () => {
    const composed = compose();
    expect(composed(10)).toBe(10);
    expect(composed(10, 20)).toEqual([10, 20]);
  });

  test('should handle empty input for the rightmost function', () => {
    const identity = (x) => x;
    const composed = compose(identity);
    expect(composed()).toBeUndefined();
  });
});