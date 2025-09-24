import { pipe } from './pipe-utils';

describe('pipe', () => {
  it('should pipe the functions from left to right', () => {
    const add5 = (x) => x + 5;
    const multiplyBy2 = (x) => x * 2;
    const subtract10 = (x) => x - 10;

    const pipedFunction = pipe(add5, multiplyBy2, subtract10);
    expect(pipedFunction(5)).toBe(10); // (5 + 5) * 2 - 10 = 10
  });

  it('should work with a single function', () => {
    const add5 = (x) => x + 5;
    const pipedFunction = pipe(add5);
    expect(pipedFunction(5)).toBe(10);
  });

  it('should return the initial value if no functions are provided', () => {
    const pipedFunction = pipe();
    expect(pipedFunction(5)).toBe(5);
  });
});
