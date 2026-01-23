import { curry } from './function-curry-utils.js';

describe('curry', () => {
  it('should return a function if not enough arguments are provided', () => {
    const sum = (a, b, c) => a + b + c;
    const curriedSum = curry(sum);

    expect(typeof curriedSum(1)).toBe('function');
    expect(typeof curriedSum(1)(2)).toBe('function');
    expect(typeof curriedSum(1, 2)).toBe('function');
  });

  it('should execute the function when enough arguments are provided', () => {
    const sum = (a, b, c) => a + b + c;
    const curriedSum = curry(sum);

    expect(curriedSum(1, 2, 3)).toBe(6);
    expect(curriedSum(1)(2)(3)).toBe(6);
    expect(curriedSum(1, 2)(3)).toBe(6);
    expect(curriedSum(1)(2, 3)).toBe(6);
  });

  it('should handle functions with no arguments', () => {
    const greet = jest.fn(() => 'Hello');
    const curriedGreet = curry(greet);

    expect(curriedGreet()).toBe('Hello');
    expect(greet).toHaveBeenCalledTimes(1);
  });

  it('should preserve `this` context', () => {
    const obj = {
      value: 10,
      add: function(a, b) {
        return this.value + a + b;
      },
    };
    const curriedAdd = curry(obj.add);

    const result = curriedAdd.call({ value: 100 }, 5)(10);
    expect(result).toBe(115); // 100 + 5 + 10
  });

  it('should work with functions having more arguments than provided initially', () => {
    const multiply = (a, b, c) => a * b * c;
    const curriedMultiply = curry(multiply);
    const multiplyBy10 = curriedMultiply(10); // partially applied

    expect(multiplyBy10(2, 3)).toBe(60); // 10 * 2 * 3
    expect(multiplyBy10(5)(2)).toBe(100); // 10 * 5 * 2
  });
});
