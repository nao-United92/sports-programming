import { pipe } from './pipe-practice.js';

describe('pipe', () => {
  it('should pipe functions from left to right', () => {
    const add5 = (x) => x + 5;
    const multiplyBy2 = (x) => x * 2;
    const subtract10 = (x) => x - 10;

    const piped = pipe(add5, multiplyBy2, subtract10);
    expect(piped(5)).toBe(10); // (5 + 5) * 2 - 10 = 10
  });

  it('should work with a single function', () => {
    const add5 = (x) => x + 5;
    const piped = pipe(add5);
    expect(piped(10)).toBe(15);
  });

  it('should return the initial value if no functions are provided', () => {
    const piped = pipe();
    expect(piped(10)).toBe(10);
  });
});
