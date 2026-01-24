import deepMerge from './object-deep-merge-utils';

describe('deepMerge', () => {
  // Test case 1: Basic merge of two objects
  test('should merge two simple objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const result = deepMerge({}, obj1, obj2);
    expect(result).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  // Test case 2: Overwriting primitive values
  test('should overwrite primitive values from source to target', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const result = deepMerge({}, obj1, obj2);
    expect(result).toEqual({ a: 1, b: 3, c: 4 });
  });

  // Test case 3: Deep merge of nested objects
  test('should deeply merge nested objects', () => {
    const obj1 = { a: 1, b: { c: 2, d: 3 } };
    const obj2 = { b: { d: 4, e: 5 } };
    const result = deepMerge({}, obj1, obj2);
    expect(result).toEqual({ a: 1, b: { c: 2, d: 4, e: 5 } });
  });

  // Test case 4: Arrays concatenation
  test('should concatenate arrays when merging', () => {
    const obj1 = { a: [1, 2], b: 3 };
    const obj2 = { a: [3, 4], c: 5 };
    const result = deepMerge({}, obj1, obj2);
    expect(result).toEqual({ a: [1, 2, 3, 4], b: 3, c: 5 });
  });

  // Test case 5: More than two sources
  test('should merge properties from multiple source objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { c: 3 };
    const result = deepMerge({}, obj1, obj2, obj3);
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });

  // Test case 6: Deep merge with arrays and objects combined
  test('should handle complex nested structures with arrays and objects', () => {
    const obj1 = {
      user: {
        name: 'Alice',
        settings: { theme: 'dark', notifications: true },
        roles: ['admin', 'editor'],
      },
      data: [1, 2],
    };
    const obj2 = {
      user: {
        settings: { notifications: false, language: 'en' },
        roles: ['viewer'],
      },
      data: [3, 4],
      status: 'active',
    };
    const result = deepMerge({}, obj1, obj2);
    expect(result).toEqual({
      user: {
        name: 'Alice',
        settings: { theme: 'dark', notifications: false, language: 'en' },
        roles: ['admin', 'editor', 'viewer'],
      },
      data: [1, 2, 3, 4],
      status: 'active',
    });
  });

  // Test case 7: Source with null/undefined values
  test('should handle null and undefined values in sources', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: null, c: undefined, d: 4 };
    const result = deepMerge({}, obj1, obj2);
    expect(result).toEqual({ a: 1, b: null, c: undefined, d: 4 });
  });

  // Test case 8: Target with null/undefined values
  test('should handle null and undefined values in target', () => {
    const target = { a: 1, b: null };
    const source = { b: 2, c: 3 };
    const result = deepMerge(target, source);
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });

  // Test case 9: Invalid target input
  test('should throw TypeError if target is not an object', () => {
    expect(() => deepMerge(null, {})).toThrow(TypeError);
    expect(() => deepMerge(undefined, {})).toThrow(TypeError);
    expect(() => deepMerge(123, {})).toThrow(TypeError);
    expect(() => deepMerge('string', {})).toThrow(TypeError);
  });

  // Test case 10: Source is an object and target is undefined
  test('should correctly assign source objects when target key is undefined', () => {
    const source = {nested: {a: 1}};
    const target = {};
    const result = deepMerge(target, source);
    expect(result).toEqual({nested: {a: 1}});
    // Ensure it's a deep copy, not reference
    expect(result.nested).not.toBe(source.nested);
  });

  // Test case 11: Source is an array and target is undefined
  test('should correctly assign source arrays when target key is undefined', () => {
    const source = {items: [1, 2]};
    const target = {};
    const result = deepMerge(target, source);
    expect(result).toEqual({items: [1, 2]});
    // Ensure it's a deep copy, not reference
    expect(result.items).not.toBe(source.items);
  });
});
