import { pipe } from './pipe-utils.js';

describe('pipe', () => {
  test('should pipe functions from left to right', () => {
    const add5 = (x) => x + 5;
    const multiplyBy2 = (x) => x * 2;
    const subtract10 = (x) => x - 10;

    const piped = pipe(add5, multiplyBy2, subtract10);
    // (10 + 5) * 2 - 10 = 20
    expect(piped(10)).toBe(20);
  });

  test('should pass initial arguments to the first function', () => {
    const sum = (a, b) => a + b;
    const square = (x) => x * x;

    const piped = pipe(sum, square);
    // (3 + 7)^2 = 100
    expect(piped(3, 7)).toBe(100);
  });

  test('should return an identity function if no functions are provided', () => {
    const identity = pipe();
    expect(identity(123)).toBe(123);
    const obj = {};
    expect(identity(obj)).toBe(obj);
  });

  test('should return the single function if only one is provided', () => {
    const myFunc = (x) => x * x;
    const piped = pipe(myFunc);
    expect(piped).toBe(myFunc);
  });

  test('should work with functions that return different types', () => {
    const getLength = (str) => str.length;
    const isEven = (num) => num % 2 === 0;
    const toString = (bool) => bool.toString();

    const piped = pipe(getLength, isEven, toString);
    expect(piped('hello')).toBe('false'); // length 5 is odd
    expect(piped('hellow')).toBe('true'); // length 6 is even
  });
});