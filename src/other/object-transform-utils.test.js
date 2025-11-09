const { pick, omit } = require('./object-transform-utils');

describe('pick', () => {
  const testObj = {
    a: 1,
    b: 2,
    c: 3,
    d: { e: 4 },
  };

  test('should pick specified keys from an object', () => {
    const result = pick(testObj, ['a', 'c']);
    expect(result).toEqual({ a: 1, c: 3 });
  });

  test('should return an empty object if no keys are specified', () => {
    const result = pick(testObj, []);
    expect(result).toEqual({});
  });

  test('should ignore non-existent keys', () => {
    const result = pick(testObj, ['a', 'x', 'c']);
    expect(result).toEqual({ a: 1, c: 3 });
  });

  test('should not mutate the original object', () => {
    const originalObj = { ...testObj };
    pick(testObj, ['a']);
    expect(testObj).toEqual(originalObj);
  });

  test('should handle nested objects correctly (shallow pick)', () => {
    const result = pick(testObj, ['d']);
    expect(result).toEqual({ d: { e: 4 } });
    expect(result.d).toBe(testObj.d); // Should be same reference for nested objects
  });
});

describe('omit', () => {
  const testObj = {
    a: 1,
    b: 2,
    c: 3,
    d: { e: 4 },
  };

  test('should omit specified keys from an object', () => {
    const result = omit(testObj, ['a', 'c']);
    expect(result).toEqual({ b: 2, d: { e: 4 } });
  });

  test('should return the original object if no keys are specified', () => {
    const result = omit(testObj, []);
    expect(result).toEqual(testObj);
  });

  test('should ignore non-existent keys', () => {
    const result = omit(testObj, ['a', 'x', 'c']);
    expect(result).toEqual({ b: 2, d: { e: 4 } });
  });

  test('should not mutate the original object', () => {
    const originalObj = { ...testObj };
    omit(testObj, ['a']);
    expect(testObj).toEqual(originalObj);
  });
});
