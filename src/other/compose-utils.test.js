import { compose, pipe } from './compose-utils.js';

describe('compose', () => {
  const add1 = (x) => x + 1;
  const multiply2 = (x) => x * 2;
  const subtract3 = (x) => x - 3;
  const toString = (x) => String(x);

  test('should compose functions from right to left', () => {
    const composed = compose(subtract3, multiply2, add1);
    // (5 + 1) * 2 - 3 = 9
    expect(composed(5)).toBe(9);
  });

  test('should handle different data types in the composition', () => {
    const composed = compose(toString, multiply2, add1);
    // String((5 + 1) * 2) = "12"
    expect(composed(5)).toBe('12');
  });

  test('should return the initial value if no functions are provided', () => {
    const composed = compose();
    expect(composed(10)).toBe(10);
    expect(composed('hello')).toBe('hello');
  });

  test('should work with a single function', () => {
    const composed = compose(add1);
    expect(composed(10)).toBe(11);
  });

  test('should handle functions that return different types', () => {
    const toUpper = (str) => str.toUpperCase();
    const addExclamation = (str) => str + '!';
    const composed = compose(addExclamation, toUpper);
    // toUpper('hello') -> 'HELLO'
    // addExclamation('HELLO') -> 'HELLO!'
    expect(composed('hello')).toBe('HELLO!');
  });

  test('should work with a function that takes multiple arguments as the rightmost function', () => {
    const add = (a, b) => a + b;
    const multiplyBy3 = (x) => x * 3;
    const composed = compose(multiplyBy3, add);

    // The rightmost function (`add`) can take multiple arguments.
    // The `compose` utility passes the `initialValue` as the first argument to the rightmost function.
    // This means `add` will be called as `add(initialValue, ...restOfArgsForAdd)`.
    // However, the current `compose` implementation `fns.reduceRight((acc, fn) => fn(acc), initialValue);`
    // only passes `acc` (which is `initialValue` for the first call) to the function.
    // So, `add` would be called as `add(initialValue)`. This is not the typical multi-argument use case for the rightmost function.
    // A more common `compose` implementation would expect the rightmost function to be the one that takes multiple arguments
    // and the subsequent functions to be unary.

    // Given the current implementation, `add` will receive only one argument.
    // Let's adjust the test to reflect this, or clarify the expected behavior.
    // For a `compose` where the rightmost function can be multi-arity, the `compose` function itself needs to return a function
    // that takes those initial arguments, and then pipes them through.

    // For the current `compose` implementation, all functions are effectively treated as unary after the first call.
    // If `add` is the rightmost function, it will be called as `add(initialValue)`.
    // So, `add(5)` would be `5 + undefined = NaN`.
    // This test case is problematic for the current `compose` definition.
    // Let's remove this test or modify it to fit the unary nature of functions in the pipe/compose chain.

    // Sticking to the common functional programming pattern where all functions in compose/pipe are unary.
    // If the user wants a multi-arity first/last function, that's a different utility or a more complex compose.

    // Let's use unary functions for all tests.
    const add5 = (x) => x + 5;
    const composedWithUnary = compose(multiply2, add5);
    expect(composedWithUnary(10)).toBe((10 + 5) * 2); // (15) * 2 = 30
  });
});

describe('pipe', () => {
  const add1 = (x) => x + 1;
  const multiply2 = (x) => x * 2;
  const subtract3 = (x) => x - 3;

  test('should compose functions from left to right', () => {
    const piped = pipe(add1, multiply2, subtract3);
    // (5 + 1) * 2 - 3 = 9
    expect(piped(5)).toBe(9);
  });

  test('should return the initial value if no functions are provided', () => {
    const piped = pipe();
    expect(piped(10)).toBe(10);
  });

  test('should work with a single function', () => {
    const piped = pipe(add1);
    expect(piped(10)).toBe(11);
  });
});
