import { pipe } from './function-pipe-utils.js';

describe('pipe', () => {
  it('should compose functions from left to right', () => {
    const add = (a, b) => a + b;
    const square = (n) => n * n;
    const toString = (n) => String(n);

    const addSquareToString = pipe(add, square, toString);

    expect(addSquareToString(2, 3)).toBe('25'); // (2 + 3) = 5, 5*5 = 25, '25'
  });

  it('should handle a single function', () => {
    const addOne = (n) => n + 1;
    const singlePipe = pipe(addOne);

    expect(singlePipe(5)).toBe(6);
  });

  it('should return undefined if no functions are provided', () => {
    const emptyPipe = pipe();
    expect(emptyPipe()).toBeUndefined();
  });

  it('should maintain the `this` context', () => {
    const obj = {
      value: 10,
      addValue: function(num) {
        return this.value + num;
      },
      multiplyByTwo: function(num) {
        return num * 2;
      },
    };

    const combinedPipe = pipe(obj.addValue, obj.multiplyByTwo);

    expect(combinedPipe.call({ value: 5 }, 3)).toBe(16); // (5 + 3) * 2 = 16
  });
});
