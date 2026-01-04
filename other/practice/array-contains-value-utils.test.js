import { containsValue } from './array-contains-value-utils';

describe('containsValue', () => {
  const numbers = [1, 2, 3, 4, 5];
  const mixed = [1, 'hello', null, undefined, {
    a: 1
  },
    [1, 2]
  ];

  test('should return true if the array contains the value', () => {
    expect(containsValue(numbers, 3)).toBe(true);
    expect(containsValue(mixed, 'hello')).toBe(true);
    expect(containsValue(mixed, null)).toBe(true);
  });

  test('should return false if the array does not contain the value', () => {
    expect(containsValue(numbers, 6)).toBe(false);
    expect(containsValue(mixed, 'world')).toBe(false);
    expect(containsValue(mixed, 0)).toBe(false);
  });

  test('should handle different data types correctly', () => {
    const obj = {
      a: 1
    };
    const arr = [1, 2];
    expect(containsValue(mixed, obj)).toBe(true); // Same object reference
    expect(containsValue(mixed, arr)).toBe(true); // Same array reference
    expect(containsValue(mixed, {
      a: 1
    })).toBe(false); // Different object reference
    expect(containsValue(mixed, [1, 2])).toBe(false); // Different array reference
  });

  test('should return false for an empty array', () => {
    expect(containsValue([], 1)).toBe(false);
  });

  test('should throw an error if array is not an array', () => {
    expect(() => containsValue(null, 1)).toThrow('Expected an array');
    expect(() => containsValue(undefined, 1)).toThrow('Expected an array');
    expect(() => containsValue("string", 1)).toThrow('Expected an array');
    expect(() => containsValue(123, 1)).toThrow('Expected an array');
    expect(() => containsValue({}, 1)).toThrow('Expected an array');
  });
});
