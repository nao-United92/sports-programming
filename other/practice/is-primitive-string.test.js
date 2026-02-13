import isPrimitiveString from './is-primitive-string';

describe('isPrimitiveString', () => {
  test('should return true for string primitives', () => {
    expect(isPrimitiveString('hello')).toBe(true);
    expect(isPrimitiveString('')).toBe(true);
    expect(isPrimitiveString('123')).toBe(true);
  });

  test('should return false for String objects', () => {
    expect(isPrimitiveString(new String('hello'))).toBe(false);
  });

  test('should return false for non-string values', () => {
    expect(isPrimitiveString(null)).toBe(false);
    expect(isPrimitiveString(undefined)).toBe(false);
    expect(isPrimitiveString(123)).toBe(false);
    expect(isPrimitiveString(true)).toBe(false);
    expect(isPrimitiveString({})).toBe(false);
    expect(isPrimitiveString([])).toBe(false);
  });
});
