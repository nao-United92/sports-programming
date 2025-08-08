import { curry } from './curry-utils';

describe('curry', () => {
  test('should curry a function with a specified arity', () => {
    const add = (a, b, c) => a + b + c;
    const curriedAdd = curry(add, 3);

    expect(curriedAdd(1)(2)(3)).toBe(6);
    expect(curriedAdd(1, 2)(3)).toBe(6);
    expect(curriedAdd(1)(2, 3)).toBe(6);
    expect(curriedAdd(1, 2, 3)).toBe(6);
  });

  test('should curry a function using its length property as arity', () => {
    const multiply = (a, b) => a * b;
    const curriedMultiply = curry(multiply);

    expect(curriedMultiply(2)(3)).toBe(6);
    expect(curriedMultiply(2, 3)).toBe(6);
  });

  test('should preserve the context (this binding)', () => {
    const obj = {
      x: 10,
      add: curry(function(a, b) {
        return this.x + a + b;
      })
    };

    expect(obj.add(1)(2)).toBe(13);
    expect(obj.add(1, 2)).toBe(13);
  });

  test('should handle functions with no arguments', () => {
    const greet = () => 'Hello';
    const curriedGreet = curry(greet);

    expect(curriedGreet()).toBe('Hello');
  });

  test('should handle functions with more arguments than arity', () => {
    const sum = (a, b) => a + b;
    const curriedSum = curry(sum, 2);

    expect(curriedSum(1, 2, 3)).toBe(3); // Only first two arguments are used
  });
});
