
import { rangeInclusive } from './array-range-inclusive-utils.js';

describe('rangeInclusive', () => {
  it('should generate an ascending range with default step 1', () => {
    expect(rangeInclusive(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should generate an ascending range with a custom step', () => {
    expect(rangeInclusive(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
  });

  it('should generate a descending range with a custom step', () => {
    expect(rangeInclusive(10, 1, 2)).toEqual([10, 8, 6, 4, 2]);
  });

  it('should return an array with a single element if start and end are the same', () => {
    expect(rangeInclusive(5, 5)).toEqual([5]);
  });

  it('should throw an error if step is zero or negative', () => {
    expect(() => rangeInclusive(1, 5, 0)).toThrow('Step must be a positive number.');
    expect(() => rangeInclusive(1, 5, -1)).toThrow('Step must be a positive number.');
  });

  it('should handle floating point numbers', () => {
    expect(rangeInclusive(1.0, 3.0, 0.5)).toEqual([1.0, 1.5, 2.0, 2.5, 3.0]);
  });

  it('should handle cases where end is not perfectly divisible by step', () => {
    expect(rangeInclusive(1, 6, 2)).toEqual([1, 3, 5]);
  });
});
