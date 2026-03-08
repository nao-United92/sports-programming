import { minMax } from './array-min-max';

describe('minMax', () => {
  test('should find both min and max', () => {
    expect(minMax([3, 1, 4, 1, 5, 9])).toEqual({ min: 1, max: 9 });
  });

  test('should handle single element', () => {
    expect(minMax([5])).toEqual({ min: 5, max: 5 });
  });

  test('should handle empty array', () => {
    expect(minMax([])).toEqual({ min: undefined, max: undefined });
  });
});
