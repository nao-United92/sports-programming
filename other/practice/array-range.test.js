import { range } from './array-range.js';

describe('range', () => {
  it('creates an array of numbers from start to stop (exclusive)', () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
  });

  it('handles a custom step', () => {
    expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8]);
  });

  it('handles empty ranges', () => {
    expect(range(5, 5)).toEqual([]);
    expect(range(10, 5)).toEqual([]);
  });

  it('handles negative steps', () => {
    expect(range(5, 0, -1)).toEqual([5, 4, 3, 2, 1]);
  });
});
