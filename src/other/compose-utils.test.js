import { compose } from './compose-utils.js';

describe('compose', () => {
  test('should compose functions from right to left', () => {
    const add = (x) => x + 1;
    const multiply = (x) => x * 2;
    const square = (x) => x * x;

    const composed = compose(square, multiply, add);
    expect(composed(2)).toBe(36); // add(2) -> 3, multiply(3) -> 6, square(6) -> 36
  });

  test('should handle a single function', () => {
    const add = (x) => x + 1;
    const composed = compose(add);
    expect(composed(2)).toBe(3);
  });

  test('should return the identity function if no functions are provided', () => {
    const composed = compose();
    expect(composed(5)).toBe(5);
    expect(composed('hello')).toBe('hello');
  });

  test('the rightmost function can take multiple arguments', () => {
    const add = (x, y) => x + y;
    const square = (x) => x * x;
    const composed = compose(square, add);
    expect(composed(2, 3)).toBe(25); // add(2, 3) -> 5, square(5) -> 25
  });
});
