const pipe = require('./function-pipe-utils');

describe('pipe', () => {
  test('should compose functions from right to left', () => {
    const add = (a, b) => a + b; // This function takes two arguments
    const square = (n) => n * n; // This function takes one argument
    const toString = (n) => String(n); // This function takes one argument

    // pipe(toString, square, add)
    // The initial arguments (2, 3) go to the rightmost function `add`.
    // add(2, 3) -> 5
    // square(5) -> 25
    // toString(25) -> '25'
    const addThenSquareThenToString = pipe(toString, square, add);

    expect(addThenSquareThenToString(2, 3)).toBe('25');
  });

  test('should handle single function in the pipe', () => {
    const add = (a, b) => a + b;
    const singleFuncPipe = pipe(add);
    expect(singleFuncPipe(5, 5)).toBe(10);
  });

  test('should handle empty pipe and return the first argument or undefined', () => {
    const emptyPipe = pipe();
    expect(emptyPipe(1, 2, 3)).toBe(1);
    expect(emptyPipe()).toBeUndefined();
  });

  test('should pass arguments to the rightmost function', () => {
    const fn1 = jest.fn((a, b) => a + b); // rightmost
    const fn2 = jest.fn((n) => n * 2); // middle
    const fn3 = jest.fn((n) => n + '!'); // leftmost
    const composed = pipe(fn3, fn2, fn1);

    composed(10, 20);

    expect(fn1).toHaveBeenCalledWith(10, 20); // receives initial args
    expect(fn2).toHaveBeenCalledWith(30); // receives result of fn1
    expect(fn3).toHaveBeenCalledWith(60); // receives result of fn2
  });

  test('should maintain `this` context for all functions', () => {
    const obj = {
      value: 1,
      add: function(a, b) {
        return this.value + a + b;
      },
      multiply: function(n) {
        return this.value * n;
      },
    };

    // pipe(obj.multiply, obj.add)
    // obj.add(2,3) -> 1+2+3 = 6
    // obj.multiply(6) -> 1*6 = 6
    const composedMethod = pipe(obj.multiply, obj.add);
    expect(composedMethod.call(obj, 2, 3)).toBe(6);
  });
});
