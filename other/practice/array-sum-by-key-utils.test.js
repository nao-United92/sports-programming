import sumByKey from './array-sum-by-key-utils';

describe('sumByKey', () => {
  test('should correctly sum a specified numeric key from an array of objects', () => {
    const data = [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
      { id: 3, value: 30 },
    ];
    expect(sumByKey(data, 'value')).toBe(60);
  });

  test('should return 0 for an empty array', () => {
    expect(sumByKey([], 'value')).toBe(0);
  });

  test('should ignore non-numeric values for the specified key', () => {
    const data = [
      { id: 1, value: 10 },
      { id: 2, value: 'twenty' },
      { id: 3, value: 30 },
      { id: 4, value: null },
      { id: 5, value: undefined },
    ];
    expect(sumByKey(data, 'value')).toBe(40);
  });

  test('should handle objects where the key is missing by ignoring them', () => {
    const data = [
      { id: 1, value: 10 },
      { id: 2, amount: 20 },
      { id: 3, value: 30 },
    ];
    expect(sumByKey(data, 'value')).toBe(40);
  });

  test('should handle arrays containing non-object elements', () => {
    const data = [
      { id: 1, value: 10 },
      'not-an-object',
      { id: 3, value: 30 },
      123,
      null,
    ];
    expect(sumByKey(data, 'value')).toBe(40);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => sumByKey(null, 'value')).toThrow(TypeError);
    expect(() => sumByKey({}, 'value')).toThrow(TypeError);
  });

  test('should throw TypeError if key argument is not a non-empty string', () => {
    const data = [{ value: 10 }];
    expect(() => sumByKey(data, null)).toThrow(TypeError);
    expect(() => sumByKey(data, '')).toThrow(TypeError);
    expect(() => sumByKey(data, 123)).toThrow(TypeError);
  });

  test('should work with negative numbers', () => {
    const data = [
      { value: 10 },
      { value: -5 },
      { value: 2 },
    ];
    expect(sumByKey(data, 'value')).toBe(7);
  });

  test('should work with floating point numbers', () => {
    const data = [
      { value: 10.5 },
      { value: 2.3 },
      { value: 5.2 },
    ];
    expect(sumByKey(data, 'value')).toBeCloseTo(18.0);
  });
});