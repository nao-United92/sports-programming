// src/other/utility-helpers.test.js

const { pipe } = require('./utility-helpers');

describe('Utility Helpers', () => {
  describe('pipe', () => {
    const add1 = (num) => num + 1;
    const multiply2 = (num) => num * 2;
    const subtract3 = (num) => num - 3;
    const toString = (num) => String(num);

    test('should pipe a single function', () => {
      const piped = pipe(add1);
      expect(piped(5)).toBe(6);
    });

    test('should pipe multiple functions in order', () => {
      const piped = pipe(add1, multiply2, subtract3);
      // (5 + 1) * 2 - 3 = 6 * 2 - 3 = 12 - 3 = 9
      expect(piped(5)).toBe(9);
    });

    test('should handle different types of functions', () => {
      const piped = pipe(add1, multiply2, toString);
      // (5 + 1) * 2 = 12 -> "12"
      expect(piped(5)).toBe('12');
    });

    test('should return the initial value if no functions are provided', () => {
      const piped = pipe();
      expect(piped(10)).toBe(10);
      expect(piped('hello')).toBe('hello');
    });

    test('should handle functions that return non-primitive values', () => {
      const toArray = (str) => str.split('');
      const reverseArray = (arr) => arr.reverse();
      const joinArray = (arr) => arr.join('');

      const piped = pipe(toArray, reverseArray, joinArray);
      expect(piped('hello')).toBe('olleh');
    });

    test('should work with zero as initial value', () => {
      const piped = pipe(add1, multiply2);
      expect(piped(0)).toBe(2); // (0 + 1) * 2 = 2
    });
  });
});
