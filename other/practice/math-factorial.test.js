import { factorial } from './math-factorial.js';

describe('factorial', () => {
  it('should return 1 for 0!', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should return 1 for 1!', () => {
    expect(factorial(1)).toBe(1);
  });

  it('should return 120 for 5!', () => {
    expect(factorial(5)).toBe(120);
  });

  it('should throw an error for negative numbers', () => {
    expect(() => factorial(-1)).toThrow(TypeError);
  });
});
