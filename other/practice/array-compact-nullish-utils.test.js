import { compactNullish } from './array-compact-nullish-utils';

describe('compactNullish', () => {
  test('should remove only null and undefined values from an array', () => {
    const arr = [0, 1, false, 2, '', 3, null, 'a', undefined, NaN, {b: 1}];
    expect(compactNullish(arr)).toEqual([0, 1, false, 2, '', 3, 'a', NaN, {b: 1}]);
  });

  test('should handle an array with only truthy values', () => {
    const arr = [1, 'hello', true, {},
      []
    ];
    expect(compactNullish(arr)).toEqual([1, 'hello', true, {},
      []
    ]);
  });

  test('should handle an array with only nullish values', () => {
    const arr = [null, undefined, null, undefined];
    expect(compactNullish(arr)).toEqual([]);
  });

  test('should handle an empty array', () => {
    expect(compactNullish([])).toEqual([]);
  });

  test('should not modify the original array', () => {
    const originalArray = [1, null, 2, undefined, 3];
    compactNullish(originalArray);
    expect(originalArray).toEqual([1, null, 2, undefined, 3]);
  });

  test('should throw an error if input is not an array', () => {
    expect(() => compactNullish(null)).toThrow('Expected an array');
    expect(() => compactNullish(undefined)).toThrow('Expected an array');
    expect(() => compactNullish("string")).toThrow('Expected an array');
    expect(() => compactNullish(123)).toThrow('Expected an array');
    expect(() => compactNullish({})).toThrow('Expected an array');
  });
});
