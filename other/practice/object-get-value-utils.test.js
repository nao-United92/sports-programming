import getValue from './object-get-value-utils';

describe('getValue', () => {
  const testObject = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: null,
        g: undefined,
      },
    },
    h: [4, { i: 5 }],
    j: 'hello',
  };

  // Test case 1: Get a top-level property
  test('should return the value of a top-level property', () => {
    expect(getValue(testObject, 'a')).toBe(1);
    expect(getValue(testObject, ['a'])).toBe(1);
  });

  // Test case 2: Get a nested property
  test('should return the value of a nested property', () => {
    expect(getValue(testObject, 'b.c')).toBe(2);
    expect(getValue(testObject, ['b', 'c'])).toBe(2);
  });

  // Test case 3: Get a deeply nested property
  test('should return the value of a deeply nested property', () => {
    expect(getValue(testObject, 'b.d.e')).toBe(3);
    expect(getValue(testObject, ['b', 'd', 'e'])).toBe(3);
  });

  // Test case 4: Get a non-existent property without default value
  test('should return undefined for a non-existent property without a default value', () => {
    expect(getValue(testObject, 'x')).toBeUndefined();
    expect(getValue(testObject, 'b.x')).toBeUndefined();
    expect(getValue(testObject, 'b.d.x')).toBeUndefined();
  });

  // Test case 5: Get a non-existent property with default value
  test('should return the default value for a non-existent property', () => {
    expect(getValue(testObject, 'x', 'default')).toBe('default');
    expect(getValue(testObject, 'b.x', 0)).toBe(0);
  });

  // Test case 6: Get a property that is null
  test('should return null if the resolved property is null', () => {
    expect(getValue(testObject, 'b.d.f')).toBeNull();
    expect(getValue(testObject, 'b.d.f', 'default')).toBeNull();
  });

  // Test case 7: Get a property that is undefined
  test('should return undefined if the resolved property is explicitly undefined', () => {
    expect(getValue(testObject, 'b.d.g')).toBeUndefined();
    expect(getValue(testObject, 'b.d.g', 'default')).toBe('default'); // Default value should be returned for undefined
  });

  // Test case 8: Get an array element
  test('should return an element from an array using index', () => {
    expect(getValue(testObject, 'h.0')).toBe(4);
    expect(getValue(testObject, ['h', '0'])).toBe(4);
  });

  // Test case 9: Get a property from an object within an array
  test('should return a property from an object within an array', () => {
    expect(getValue(testObject, 'h.1.i')).toBe(5);
    expect(getValue(testObject, ['h', '1', 'i'])).toBe(5);
  });

  // Test case 10: Path to a non-object intermediate property
  test('should return default value if an intermediate path segment is not an object', () => {
    expect(getValue(testObject, 'a.x', 'default')).toBe('default');
    expect(getValue(testObject, ['a', 'x'], 'default')).toBe('default');
  });

  // Test case 11: Invalid object input (null, undefined, primitive)
  test('should return default value for invalid object input', () => {
    expect(getValue(null, 'a', 'default')).toBe('default');
    expect(getValue(undefined, 'a', 'default')).toBe('default');
    expect(getValue(123, 'a', 'default')).toBe('default');
    expect(getValue('string', 'a', 'default')).toBe('default');
    expect(getValue(true, 'a', 'default')).toBe('default');
  });

  // Test case 12: Empty path
  test('should return the object itself if path is empty array or empty string', () => {
    expect(getValue(testObject, '')).toEqual(testObject);
    expect(getValue(testObject, [])).toEqual(testObject);
    expect(getValue(testObject, '', 'default')).toEqual(testObject);
  });

  // Test case 13: Path leading to undefined without default
  test('should return undefined when path leads to undefined and no default is provided', () => {
    expect(getValue(testObject, 'b.d.g')).toBeUndefined();
  });
});
