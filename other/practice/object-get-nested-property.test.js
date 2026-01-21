import getNestedProperty from './object-get-nested-property.js';

describe('getNestedProperty', () => {
  const obj = {
    a: {
      b: {
        c: 1,
      },
      d: [2, 3],
    },
  };

  it('should get a nested property', () => {
    expect(getNestedProperty(obj, 'a.b.c')).toBe(1);
  });

  it('should return undefined for a non-existent property', () => {
    expect(getNestedProperty(obj, 'a.b.e')).toBeUndefined();
  });

  it('should handle array paths', () => {
    expect(getNestedProperty(obj, ['a', 'b', 'c'])).toBe(1);
  });

  it('should handle an empty path', () => {
    expect(getNestedProperty(obj, '')).toBeUndefined();
  });

  it('should handle a null path', () => {
    expect(getNestedProperty(obj, null)).toBeUndefined();
  });

  it('should handle getting an array element', () => {
    expect(getNestedProperty(obj, 'a.d.0')).toBe(2);
  });
});
