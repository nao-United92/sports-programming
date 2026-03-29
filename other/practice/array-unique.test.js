import { unique } from './array-unique.js';

describe('unique', () => {
  it('should return an array with unique elements', () => {
    expect(unique([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an empty array if input is not an array', () => {
    expect(unique(null)).toEqual([]);
    expect(unique('string')).toEqual([]);
    expect(unique({})).toEqual([]);
  });

  it('should handle an already unique array', () => {
    expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle empty array', () => {
    expect(unique([])).toEqual([]);
  });

  it('should handle mixed types', () => {
    expect(unique([1, '1', 1])).toEqual([1, '1']);
  });
});
