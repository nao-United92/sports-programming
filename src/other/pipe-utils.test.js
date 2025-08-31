import { pipe } from './pipe-utils.js';

describe('pipe', () => {
  it('should pipe functions from left to right', () => {
    const add5 = x => x + 5;
    const multiplyBy2 = x => x * 2;
    const subtract10 = x => x - 10;

    const piped = pipe(add5, multiplyBy2, subtract10);
    // (5 + 5) * 2 - 10 = 10
    expect(piped(5)).toBe(10);
  });

  it('should work with a single function', () => {
    const add5 = x => x + 5;
    const piped = pipe(add5);
    expect(piped(10)).toBe(15);
  });

  it('should return the input if no functions are provided', () => {
    const piped = pipe();
    expect(piped(10)).toBe(10);
  });

  it('should handle different types of data', () => {
    const toUpperCase = str => str.toUpperCase();
    const addExclamation = str => `${str}!`;
    const repeat = str => str.repeat(3);

    const piped = pipe(toUpperCase, addExclamation, repeat);
    expect(piped('hello')).toBe('HELLO!HELLO!HELLO!');
  });
});
