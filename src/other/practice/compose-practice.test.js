import { compose } from './compose-practice.js';

describe('compose', () => {
  it('should compose functions from right to left', () => {
    const add5 = (x) => x + 5;
    const multiplyBy2 = (x) => x * 2;
    const subtract10 = (x) => x - 10;

    const composed = compose(subtract10, multiplyBy2, add5);
    expect(composed(5)).toBe(10); // (5 + 5) * 2 - 10 = 10
  });

  it('should work with a single function', () => {
    const add5 = (x) => x + 5;
    const composed = compose(add5);
    expect(composed(10)).toBe(15);
  });

  it('should return the initial value if no functions are provided', () => {
    const composed = compose();
    expect(composed(10)).toBe(10);
  });
});
