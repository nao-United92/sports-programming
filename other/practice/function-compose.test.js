import { compose } from './function-compose.js';

describe('compose', () => {
  test('should compose functions right to left', () => {
    const add5 = (x) => x + 5;
    const multiply2 = (x) => x * 2;
    const composed = compose(add5, multiply2);
    expect(composed(5)).toBe(15); // (5 * 2) + 5 = 15
  });

  test('should return identity for no functions', () => {
    const composed = compose();
    expect(composed(5)).toBe(5);
  });
  
  test('should work with a single function', () => {
      const add1 = x => x + 1;
      expect(compose(add1)(1)).toBe(2);
  });
});
