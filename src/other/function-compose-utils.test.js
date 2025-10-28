import { compose } from './function-compose-utils';

describe('compose', () => {
  const add1 = (x) => x + 1;
  const multiply2 = (x) => x * 2;
  const subtract3 = (x) => x - 3;
  const toString = (x) => String(x);

  it('should compose functions from right to left', () => {
    const composed = compose(subtract3, multiply2, add1);
    expect(composed(5)).toBe((5 + 1) * 2 - 3); // (6 * 2) - 3 = 12 - 3 = 9
  });

  it('should work with a single function', () => {
    const composed = compose(add1);
    expect(composed(10)).toBe(11);
  });

  it('should work with multiple functions', () => {
    const composed = compose(toString, subtract3, multiply2, add1);
    expect(composed(5)).toBe('9');
  });

  it('should handle functions with multiple arguments for the rightmost function', () => {
    const add = (a, b) => a + b;
    const composed = compose(multiply2, add);
    expect(composed(1, 2)).toBe((1 + 2) * 2); // 3 * 2 = 6
  });

  it('should return a function that returns its arguments if no functions are provided', () => {
    const composed = compose();
    expect(composed(1, 2, 3)).toEqual([1, 2, 3]);
    expect(composed(1)).toBe(1);
  });

  it('should throw an error if any argument is not a function', () => {
    expect(() => compose(add1, 'not a function', multiply2)).toThrow('Expected all arguments to be functions');
    expect(() => compose(null)).toThrow('Expected all arguments to be functions');
  });

  it('should maintain the `this` context (though less common in functional compose)', () => {
    const obj = { value: 1 };
    const addValue = function(x) { return x + this.value; };
    const composed = compose(multiply2, addValue);

    const result = composed.call(obj, 5);
    expect(result).toBe((5 + obj.value) * 2); // (5 + 1) * 2 = 12
  });
});
