import { pipe } from './pipe-utils.js';

describe('pipe', () => {
  test('should compose functions from left to right', () => {
    const add1 = (x) => x + 1;
    const multiply2 = (x) => x * 2;
    const subtract3 = (x) => x - 3;

    const pipedFunction = pipe(add1, multiply2, subtract3);

    expect(pipedFunction(5)).toBe((5 + 1) * 2 - 3); // (6 * 2) - 3 = 12 - 3 = 9
  });

  test('should handle no functions', () => {
    const pipedFunction = pipe();
    expect(pipedFunction(10)).toBe(10);
  });

  test('should handle a single function', () => {
    const add5 = (x) => x + 5;
    const pipedFunction = pipe(add5);
    expect(pipedFunction(10)).toBe(15);
  });
});
