import { pipe } from './function-pipe-utils.js';

describe('pipe', () => {
  const add1 = (x) => x + 1;
  const multiply2 = (x) => x * 2;
  const subtract3 = (x) => x - 3;
  const toString = (x) => String(x);

  test('should pipe a single function', () => {
    const piped = pipe(add1);
    expect(piped(5)).toBe(6);
  });

  test('should pipe multiple functions from left to right', () => {
    const piped = pipe(add1, multiply2, subtract3);
    // (5 + 1) * 2 - 3 = 9
    expect(piped(5)).toBe(9);
  });

  test('should handle functions with multiple arguments for the first function', () => {
    const add = (a, b) => a + b;
    const piped = pipe(add, multiply2);
    // (2 + 3) * 2 = 10
    expect(piped(2, 3)).toBe(10);
  });

  test('should handle different types of functions', () => {
    const piped = pipe(add1, multiply2, toString);
    // (5 + 1) * 2 = 12, then '12'
    expect(piped(5)).toBe('12');
  });

  test('should return a function that returns the first argument if no functions are provided', () => {
    const piped = pipe();
    expect(piped(10)).toBe(10);
    expect(piped(10, 20)).toEqual([10, 20]);
  });

  test('should handle empty input for the first function', () => {
    const identity = (x) => x;
    const piped = pipe(identity);
    expect(piped()).toBeUndefined();
  });
});