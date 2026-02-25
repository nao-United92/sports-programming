import { mathFibonacci } from './math-fibonacci-utils';

describe('mathFibonacci', () => {
  test('returns fibonacci sequence of length 5', () => {
    expect(mathFibonacci(5)).toEqual([0, 1, 1, 2, 3]);
  });

  test('returns empty array for negative input', () => {
    expect(mathFibonacci(-1)).toEqual([]);
  });
});
