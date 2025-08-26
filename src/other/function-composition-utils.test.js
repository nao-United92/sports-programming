import { flow, flowRight } from './function-composition-utils.js';

describe('flow', () => {
  const add = (a, b) => a + b;
  const square = (n) => n * n;
  const toString = (n) => String(n);

  it('should compose functions from left to right', () => {
    const addAndSquare = flow(add, square);
    expect(addAndSquare(2, 3)).toBe(25); // (2 + 3) = 5, 5 * 5 = 25
  });

  it('should handle multiple functions', () => {
    const processNumber = flow(add, square, toString);
    expect(processNumber(1, 2)).toBe('9'); // (1 + 2) = 3, 3 * 3 = 9, String(9) = '9'
  });

  it('should return the initial arguments if no functions are provided', () => {
    const noFlow = flow();
    expect(noFlow(1, 2)).toEqual(1); // flow() returns a function that returns the first argument
  });
});

describe('flowRight', () => {
  const add = (a, b) => a + b;
  const square = (n) => n * n;
  const toString = (n) => String(n);

  it('should compose functions from right to left', () => {
    const squareAndAdd = flowRight(square, add);
    expect(squareAndAdd(2, 3)).toBe(25); // (2 + 3) = 5, 5 * 5 = 25
  });

  it('should handle multiple functions', () => {
    const processNumber = flowRight(toString, square, add);
    expect(processNumber(1, 2)).toBe('9'); // (1 + 2) = 3, 3 * 3 = 9, String(9) = '9'
  });

  it('should return the initial arguments if no functions are provided', () => {
    const noFlowRight = flowRight();
    expect(noFlowRight(1, 2)).toEqual(1); // flowRight() returns a function that returns the first argument
  });
});
