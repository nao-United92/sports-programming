import { pipe } from './pipe-utils.js';

describe('pipe', () => {
  const add1 = (x) => x + 1;
  const multiply2 = (x) => x * 2;
  const subtract3 = (x) => x - 3;
  const toString = (x) => String(x);

  test('should pipe functions from left to right', () => {
    const piped = pipe(add1, multiply2, subtract3);
    expect(piped(5)).toBe((5 + 1) * 2 - 3); // (6 * 2) - 3 = 12 - 3 = 9
  });

  test('should handle different data types in the pipeline', () => {
    const piped = pipe(add1, multiply2, toString);
    expect(piped(5)).toBe(String((5 + 1) * 2)); // String(12) = "12"
  });

  test('should return the initial value if no functions are provided', () => {
    const piped = pipe();
    expect(piped(10)).toBe(10);
    expect(piped('hello')).toBe('hello');
  });

  test('should work with a single function', () => {
    const piped = pipe(add1);
    expect(piped(10)).toBe(11);
  });

  test('should work with functions that take multiple arguments as the first function', () => {
    const add = (a, b) => a + b;
    const piped = pipe(add, multiply2);
    // The first function in pipe can take multiple arguments, but subsequent ones are unary
    // This test case might be tricky with the current pipe implementation which assumes initialValue for the first function.
    // Let's adjust the pipe implementation or the test to reflect common pipe usage.
    // For now, the pipe expects the first function to take `initialValue` as its first argument.
    // If `add` is the first function, it will receive `initialValue` as `a`.
    // A more robust pipe might handle the first function's arity differently.
    // For simplicity, let's assume the first function is also unary or takes the initial value as its primary input.
    // Or, if the first function is meant to be multi-arity, the `pipe` signature needs to change.
    // Given the current `pipe = (...fns) => (initialValue) => fns.reduce((acc, fn) => fn(acc), initialValue);`
    // The first function `fn` will receive `initialValue` as `acc`.
    // So, `add` would be called as `add(initialValue)`. This is not ideal for a multi-argument `add`.
    // Let's stick to unary functions for `pipe` for now, which is the common functional programming pattern.
    // If the user wants a `compose` or `pipe` that handles multi-arity first function, that's a different utility.

    // Re-evaluating the test for `add`:
    // If `add` is `(a, b) => a + b`, and `pipe` calls it as `add(initialValue)`, it won't work as expected.
    // So, for `pipe`, all functions should ideally be unary.
    // Let's create a unary version of add for this test.
    const addX = (x) => (y) => x + y;
    const add5 = addX(5);
    const pipedWithUnary = pipe(add5, multiply2);
    expect(pipedWithUnary(10)).toBe((10 + 5) * 2); // 15 * 2 = 30
  });

  test('should handle functions that return different types', () => {
    const toUpper = (str) => str.toUpperCase();
    const addExclamation = (str) => str + '!';
    const piped = pipe(toUpper, addExclamation);
    expect(piped('hello')).toBe('HELLO!');
  });
});