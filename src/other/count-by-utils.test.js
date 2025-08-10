import { countBy } from './count-by-utils';

describe('countBy', () => {
  test('should count elements based on an iteratee function', () => {
    const numbers = [6.1, 4.2, 6.3, 4.4, 6.5];
    const result = countBy(numbers, Math.floor);
    expect(result).toEqual({ '4': 2, '6': 3 });
  });

  test('should count elements based on a property string', () => {
    const items = [{ type: 'A' }, { type: 'B' }, { type: 'A' }];
    const result = countBy(items, 'type');
    expect(result).toEqual({ A: 2, B: 1 });
  });

  test('should use an identity function if no iteratee is provided', () => {
    const items = ['a', 'b', 'a', 'c', 'b', 'a'];
    const result = countBy(items);
    expect(result).toEqual({ a: 3, b: 2, c: 1 });
  });

  test('should return an empty object for an empty array', () => {
    expect(countBy([])).toEqual({});
  });

  test('should return an empty object for non-array input', () => {
    expect(countBy(null)).toEqual({});
    expect(countBy({})).toEqual({});
  });

  test('should handle various data types as keys', () => {
    const items = [true, false, true, true, null, undefined, null];
    const result = countBy(items);
    expect(result).toEqual({ 'true': 3, 'false': 1, 'null': 2, 'undefined': 1 });
  });
});
