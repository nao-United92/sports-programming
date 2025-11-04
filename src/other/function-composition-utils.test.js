import { flow, flowRight } from './function-composition-utils.js';

describe('flow', () => {
  const add = (a, b) => a + b;
  const square = (n) => n * n;
  const double = (n) => n * 2;

  test('should compose functions from left to right', () => {
    const addAndSquare = flow(add, square);
    expect(addAndSquare(1, 2)).toBe(9); // (1 + 2) => 3*3 => 9
  });

  test('should handle multiple functions', () => {
    const pipeline = flow(add, square, double);
    expect(pipeline(1, 2)).toBe(18); // (1 + 2) => 3*3 => 9*2 => 18
  });
});

describe('flowRight (compose)', () => {
  const add5 = (n) => n + 5;
  const multiplyBy2 = (n) => n * 2;

  test('should compose functions from right to left', () => {
    const composed = flowRight(add5, multiplyBy2);
    expect(composed(10)).toBe(25); // 10*2 => 20+5 => 25
  });
});