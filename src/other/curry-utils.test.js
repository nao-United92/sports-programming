import { curry } from './curry-utils.js';

describe('curry', () => {
  const sum = (a, b, c) => a + b + c;

  test('should return a function that can be called until all arguments are supplied', () => {
    const curriedSum = curry(sum);
    const add1 = curriedSum(1);
    expect(typeof add1).toBe('function');
    const add1and2 = add1(2);
    expect(typeof add1and2).toBe('function');
    const finalResult = add1and2(3);
    expect(finalResult).toBe(6);
  });

  test('should execute the function when all arguments are supplied at once', () => {
    const curriedSum = curry(sum);
    expect(curriedSum(1, 2, 3)).toBe(6);
  });

  test('should execute the function when arguments are supplied in chunks', () => {
    const curriedSum = curry(sum);
    const add1 = curriedSum(1);
    expect(add1(2, 3)).toBe(6);
  });

  test('should return the correct value for multiple curried calls', () => {
    const curriedSum = curry(sum);
    expect(curriedSum(1)(2)(3)).toBe(6);
  });

  test('should work with functions of different arities', () => {
    const multiply = (a, b) => a * b;
    const curriedMul = curry(multiply);
    expect(curriedMul(3)(4)).toBe(12);
    expect(curriedMul(5, 6)).toBe(30);
  });
});
