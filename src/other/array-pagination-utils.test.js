import { paginate } from './array-pagination-utils.js';

describe('paginate', () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  it('should return the correct items for a valid page', () => {
    expect(paginate(data, 1, 3)).toEqual([1, 2, 3]);
    expect(paginate(data, 2, 3)).toEqual([4, 5, 6]);
    expect(paginate(data, 3, 3)).toEqual([7, 8, 9]);
  });

  it('should return the last page correctly even if it has fewer items', () => {
    expect(paginate(data, 4, 3)).toEqual([10]);
  });

  it('should return an empty array for a page number that is too high', () => {
    expect(paginate(data, 5, 3)).toEqual([]);
    expect(paginate(data, 100, 10)).toEqual([]);
  });

  it('should return an empty array for a page number less than 1', () => {
    expect(paginate(data, 0, 3)).toEqual([]);
    expect(paginate(data, -1, 3)).toEqual([]);
  });

  it('should return an empty array for a page size less than 1', () => {
    expect(paginate(data, 1, 0)).toEqual([]);
    expect(paginate(data, 1, -1)).toEqual([]);
  });

  it('should return an empty array for an empty input array', () => {
    expect(paginate([], 1, 5)).toEqual([]);
  });

  it('should return an empty array for non-array input', () => {
    expect(paginate(null, 1, 5)).toEqual([]);
    expect(paginate(undefined, 1, 5)).toEqual([]);
    expect(paginate('string', 1, 5)).toEqual([]);
  });

  it('should handle page size equal to array length', () => {
    expect(paginate(data, 1, 10)).toEqual(data);
  });

  it('should handle page size greater than array length', () => {
    expect(paginate(data, 1, 20)).toEqual(data);
  });

  it('should handle non-integer pageNumber or pageSize by parsing them', () => {
    expect(paginate(data, '1', '3')).toEqual([1, 2, 3]);
    expect(paginate(data, 1.5, 3.9)).toEqual([1, 2, 3]); // Should parse to 1 and 3
  });

  it('should return empty array if pageNumber or pageSize are non-numeric strings', () => {
    expect(paginate(data, 'abc', 3)).toEqual([]);
    expect(paginate(data, 1, 'xyz')).toEqual([]);
  });
});
