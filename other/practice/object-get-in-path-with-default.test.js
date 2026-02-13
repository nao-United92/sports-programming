import getInPathWithDefault from './object-get-in-path-with-default';

describe('getInPathWithDefault', () => {
  const testObject = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3
      }
    },
    f: [{
      g: 4
    }, {
      h: 5
    }],
    i: null,
    j: undefined
  };

  test('should return the value if the path exists', () => {
    expect(getInPathWithDefault(testObject, ['a'])).toBe(1);
    expect(getInPathWithDefault(testObject, ['b', 'c'])).toBe(2);
    expect(getInPathWithDefault(testObject, ['b', 'd', 'e'])).toBe(3);
    expect(getInPathWithDefault(testObject, ['f', 0, 'g'])).toBe(4);
    expect(getInPathWithDefault(testObject, ['f', 1, 'h'])).toBe(5);
  });

  test('should return the default value if the path does not exist', () => {
    expect(getInPathWithDefault(testObject, ['x'], 'default')).toBe('default');
    expect(getInPathWithDefault(testObject, ['b', 'x'], 'default')).toBe('default');
    expect(getInPathWithDefault(testObject, ['b', 'd', 'x'], 'default')).toBe('default');
    expect(getInPathWithDefault(testObject, ['f', 2, 'g'], 'default')).toBe('default');
  });

  test('should return the default value if the object or path is invalid', () => {
    expect(getInPathWithDefault(null, ['a'], 'default')).toBe('default');
    expect(getInPathWithDefault(undefined, ['a'], 'default')).toBe('default');
    expect(getInPathWithDefault(testObject, null, 'default')).toBe('default');
    expect(getInPathWithDefault(testObject, [], 'default')).toBe('default');
    expect(getInPathWithDefault(123, ['a'], 'default')).toBe('default');
  });

  test('should return undefined if path does not exist and no default value is provided', () => {
    expect(getInPathWithDefault(testObject, ['x'])).toBeUndefined();
    expect(getInPathWithDefault(testObject, ['b', 'x'])).toBeUndefined();
  });

  test('should return null if the resolved value is null, even with a default value', () => {
    expect(getInPathWithDefault(testObject, ['i'], 'default')).toBe(null);
    expect(getInPathWithDefault(testObject, ['i'])).toBe(null);
  });

  test('should return the default value if the resolved value is undefined', () => {
    expect(getInPathWithDefault(testObject, ['j'], 'default')).toBe('default');
    expect(getInPathWithDefault(testObject, ['j'])).toBeUndefined();
  });

  test('should handle numeric paths (array indices)', () => {
    const arrObj = {
      data: [10, 20, 30]
    };
    expect(getInPathWithDefault(arrObj, ['data', 1])).toBe(20);
    expect(getInPathWithDefault(arrObj, ['data', 5], 99)).toBe(99);
  });
});
