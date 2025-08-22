import { every } from './collection-every-utils';

describe('every', () => {
  it('should return true if all elements in an array satisfy the predicate', () => {
    expect(every([1, 2, 3], (n) => n > 0)).toBe(true);
  });

  it('should return false if any element in an array does not satisfy the predicate', () => {
    expect(every([1, 2, 3], (n) => n < 3)).toBe(false);
  });

  it('should return true if all values in an object satisfy the predicate', () => {
    expect(every({ a: 1, b: 2 }, (v) => v > 0)).toBe(true);
  });

  it('should return false if any value in an object does not satisfy the predicate', () => {
    expect(every({ a: 1, b: 2 }, (v) => v < 2)).toBe(false);
  });

  it('should return true for empty arrays', () => {
    expect(every([], (n) => n > 0)).toBe(true);
  });

  it('should return true for empty objects', () => {
    expect(every({}, (v) => v > 0)).toBe(true);
  });

  it('should pass value, key/index, and collection to the predicate', () => {
    const mockPredicate = jest.fn(() => true);
    const arr = [10];
    every(arr, mockPredicate);
    expect(mockPredicate).toHaveBeenCalledWith(10, 0, arr);

    const obj = { key: 20 };
    every(obj, mockPredicate);
    expect(mockPredicate).toHaveBeenCalledWith(20, 'key', obj);
  });
});
