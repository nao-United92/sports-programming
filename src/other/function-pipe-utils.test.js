import { pipe } from './function-pipe-utils';

describe('pipe', () => {
  const add1 = (x) => x + 1;
  const multiply2 = (x) => x * 2;
  const subtract3 = (x) => x - 3;
  const toString = (x) => String(x);

  it('should compose functions from left to right', () => {
    const piped = pipe(add1, multiply2, subtract3);
    expect(piped(5)).toBe((5 + 1) * 2 - 3); // (6 * 2) - 3 = 12 - 3 = 9
  });

  it('should work with a single function', () => {
    const piped = pipe(add1);
    expect(piped(10)).toBe(11);
  });

  it('should work with multiple functions', () => {
    const piped = pipe(add1, multiply2, subtract3, toString);
    expect(piped(5)).toBe('9');
  });

  it('should handle functions with multiple arguments for the first function', () => {
    const add = (a, b) => a + b;
    const piped = pipe(add, multiply2);
    expect(piped(1, 2)).toBe((1 + 2) * 2); // 3 * 2 = 6
  });

  it('should return a function that returns its arguments if no functions are provided', () => {
    const piped = pipe();
    expect(piped(1, 2, 3)).toEqual([1, 2, 3]);
    expect(piped(1)).toBe(1);
  });

  it('should throw an error if any argument is not a function', () => {
    expect(() => pipe(add1, 'not a function', multiply2)).toThrow('Expected all arguments to be functions');
    expect(() => pipe(null)).toThrow('Expected all arguments to be functions');
  });

  it('should maintain the `this` context (though less common in functional pipe)', () => {
    const obj = { value: 1 };
    const addValue = function(x) { return x + this.value; };
    const piped = pipe(addValue, multiply2);

    const result = piped.call(obj, 5);
    expect(result).toBe((5 + obj.value) * 2); // (5 + 1) * 2 = 12
  });
});
