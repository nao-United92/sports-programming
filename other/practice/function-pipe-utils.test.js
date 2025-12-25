const { pipe } = require('./function-pipe-utils.js');

describe('pipe', () => {
  const add1 = (x) => x + 1;
  const multiply2 = (x) => x * 2;
  const subtract3 = (x) => x - 3;

  it('should pipe functions from left to right', () => {
    const pipedFn = pipe(add1, multiply2, subtract3);
    // (5 + 1) * 2 - 3 = 6 * 2 - 3 = 12 - 3 = 9
    expect(pipedFn(5)).toBe(9);
  });

  it('should work with a single function', () => {
    const pipedFn = pipe(add1);
    expect(pipedFn(5)).toBe(6);
  });

  it('should return the initial value if no functions are provided', () => {
    const pipedFn = pipe();
    expect(pipedFn(5)).toBe(5);
  });

  it('should handle functions with multiple arguments correctly for the first function', () => {
    const sum = (a, b) => a + b;
    const square = (x) => x * x;
    const pipedFn = pipe(sum, square); // square(sum(a, b))
    expect(pipedFn(2, 3)).toBe(25); // (2 + 3) * (2 + 3) = 5 * 5 = 25
  });
});