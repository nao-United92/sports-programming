import { pipe } from './pipe-utils.js';

describe('pipe', () => {
  const add = (x) => x + 5;
  const multiply = (x) => x * 2;
  const subtract = (x) => x - 3;

  test('should return a function', () => {
    const piped = pipe(add, multiply);
    expect(typeof piped).toBe('function');
  });

  test('should pipe functions from left to right', () => {
    const piped = pipe(add, multiply, subtract); // (10 + 5) * 2 - 3 = 27
    const result = piped(10);
    expect(result).toBe(27);
  });

  test('should work with a single function', () => {
    const piped = pipe(add);
    const result = piped(10);
    expect(result).toBe(15);
  });

  test('should return the initial value if no functions are provided', () => {
    const piped = pipe();
    const result = piped(10);
    expect(result).toBe(10);
  });

  test('should handle different types of data', () => {
    const toUpper = (str) => str.toUpperCase();
    const exclaim = (str) => `${str}!`;
    const piped = pipe(toUpper, exclaim);
    const result = piped('hello');
    expect(result).toBe('HELLO!');
  });
});