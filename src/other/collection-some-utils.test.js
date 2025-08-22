import { some } from './collection-some-utils';

describe('some', () => {
  it('should return true if any element in an array satisfies the predicate', () => {
    expect(some([1, 2, 3], (n) => n > 2)).toBe(true);
  });

  it('should return false if no element in an array satisfies the predicate', () => {
    expect(some([1, 2, 3], (n) => n > 3)).toBe(false);
  });

  it('should return true if any value in an object satisfies the predicate', () => {
    expect(some({ a: 1, b: 2 }, (v) => v > 1)).toBe(true);
  });

  it('should return false if no value in an object satisfies the predicate', () => {
    expect(some({ a: 1, b: 2 }, (v) => v > 2)).toBe(false);
  });

  it('should handle empty arrays', () => {
    expect(some([], (n) => n > 0)).toBe(false);
  });

  it('should handle empty objects', () => {
    expect(some({}, (v) => v > 0)).toBe(false);
  });

  it('should pass value, key/index, and collection to the predicate', () => {
    const mockPredicate = jest.fn();
    const arr = [10];
    some(arr, mockPredicate);
    expect(mockPredicate).toHaveBeenCalledWith(10, 0, arr);

    const obj = { key: 20 };
    some(obj, mockPredicate);
    expect(mockPredicate).toHaveBeenCalledWith(20, 'key', obj);
  });
});
