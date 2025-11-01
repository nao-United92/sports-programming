import { curry } from './curry-utils.js';

describe('curry', () => {
  // A simple function to test currying
  const add = (a, b, c) => a + b + c;

  test('should return a function when not all arguments are provided', () => {
    const curriedAdd = curry(add);
    expect(typeof curriedAdd(1)).toBe('function');
    expect(typeof curriedAdd(1)(2)).toBe('function');
  });

  test('should execute the function when all arguments are provided at once', () => {
    const curriedAdd = curry(add);
    expect(curriedAdd(1, 2, 3)).toBe(6);
  });

  test('should execute the function when all arguments are provided step-by-step', () => {
    const curriedAdd = curry(add);
    expect(curriedAdd(1)(2)(3)).toBe(6);
  });

  test('should execute the function when arguments are provided in mixed steps', () => {
    const curriedAdd = curry(add);
    expect(curriedAdd(1, 2)(3)).toBe(6);
    expect(curriedAdd(1)(2, 3)).toBe(6);
  });

  test('should work with functions having fewer arguments', () => {
    const multiply = (a, b) => a * b;
    const curriedMultiply = curry(multiply);
    expect(curriedMultiply(2)(5)).toBe(10);
    expect(curriedMultiply(3, 4)).toBe(12);
  });

  test('should work with functions having no arguments', () => {
    const greet = () => 'Hello';
    const curriedGreet = curry(greet);
    expect(curriedGreet()).toBe('Hello');
  });

  test('should maintain `this` context if bound explicitly or called as method', () => {
    const obj = {
      value: 10,
      add: function(a, b) {
        return this.value + a + b;
      },
    };
    const curriedAdd = curry(obj.add);

    // Using call/apply to set `this` context
    expect(curriedAdd.call(obj, 1, 2)).toBe(13);
    expect(curriedAdd.apply(obj, [1, 2])).toBe(13);

    // Currying step-by-step with `this` context
    const step1 = curriedAdd.call(obj, 1);
    expect(step1(2)).toBe(13);

    const step2 = curriedAdd(1).bind(obj);
    expect(step2(2)).toBe(13);
  });
});
