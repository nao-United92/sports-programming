import { compose } from './function-compose-utils.js';

describe('compose', () => {
  it('should compose functions from right to left', () => {
    const addOne = (n) => n + 1;
    const multiplyByTwo = (n) => n * 2;
    const subtractThree = (n) => n - 3;

    const composedFunc = compose(subtractThree, multiplyByTwo, addOne);

    // 最初にaddOne(10) -> 11
    // 次にmultiplyByTwo(11) -> 22
    // 最後にsubtractThree(22) -> 19
    expect(composedFunc(10)).toBe(19);
  });

  it('should handle multiple arguments for the rightmost function', () => {
    const add = (a, b) => a + b;
    const square = (n) => n * n;
    const toString = (n) => String(n);

    const composedFunc = compose(toString, square, add);

    // add(2, 3) -> 5
    // square(5) -> 25
    // toString(25) -> '25'
    expect(composedFunc(2, 3)).toBe('25');
  });

  it('should handle a single function', () => {
    const addOne = (n) => n + 1;
    const singleCompose = compose(addOne);

    expect(singleCompose(5)).toBe(6);
  });

  it('should return the first argument if no functions are provided', () => {
    const emptyCompose = compose();
    expect(emptyCompose(123)).toBe(123);
    expect(emptyCompose()).toBeUndefined();
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

    const combinedCompose = compose(obj.multiplyByTwo, obj.addValue);

    // obj.addValue(3) with this = { value: 5 } -> 8
    // obj.multiplyByTwo(8) with this = { value: 5 } -> 16
    expect(combinedCompose.call({ value: 5 }, 3)).toBe(16);
  });
});