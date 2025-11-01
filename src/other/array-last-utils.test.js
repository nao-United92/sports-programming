import { last } from './array-last-utils';

describe('last', () => {
  test('should return the last element of an array', () => {
    expect(last([1, 2, 3])).toBe(3);
    expect(last(['a', 'b', 'c'])).toBe('c');
    expect(last([true, false, true])).toBe(true);
  });

  test('should return undefined for an empty array', () => {
    expect(last([])).toBe(undefined);
  });

  test('should return the element if the array has only one element', () => {
    expect(last([1])).toBe(1);
    expect(last(['hello'])).toBe('hello');
  });

  test('should handle arrays with null or undefined elements', () => {
    expect(last([1, null, 3])).toBe(3);
    expect(last([1, 2, undefined])).toBe(undefined);
  });

  test('should return undefined for null or undefined input', () => {
    expect(last(null)).toBe(undefined);
    expect(last(undefined)).toBe(undefined);
  });
});
