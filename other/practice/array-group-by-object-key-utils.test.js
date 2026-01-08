import groupByObjectKey from './array-group-by-object-key-utils';

describe('groupByObjectKey', () => {
  test('should group an array of objects by a specified key', () => {
    const array = [
      { id: 1, category: 'fruits', name: 'apple' },
      { id: 2, category: 'vegetables', name: 'carrot' },
      { id: 3, category: 'fruits', name: 'banana' },
      { id: 4, category: 'dairy', name: 'milk' },
    ];
    const expected = {
      fruits: [
        { id: 1, category: 'fruits', name: 'apple' },
        { id: 3, category: 'fruits', name: 'banana' },
      ],
      vegetables: [
        { id: 2, category: 'vegetables', name: 'carrot' },
      ],
      dairy: [
        { id: 4, category: 'dairy', name: 'milk' },
      ],
    };
    expect(groupByObjectKey(array, 'category')).toEqual(expected);
  });

  test('should handle an empty array', () => {
    expect(groupByObjectKey([], 'category')).toEqual({});
  });

  test('should handle objects with missing key, grouping them under undefined', () => {
    const array = [
      { id: 1, category: 'a' },
      { id: 2, name: 'no-category' },
      { id: 3, category: 'a' },
    ];
    const expected = {
      a: [
        { id: 1, category: 'a' },
        { id: 3, category: 'a' },
      ],
      undefined: [
        { id: 2, name: 'no-category' },
      ],
    };
    expect(groupByObjectKey(array, 'category')).toEqual(expected);
  });

  test('should handle array with non-object items by ignoring them', () => {
    const array = [
      { id: 1, category: 'a' },
      'not-an-object',
      { id: 3, category: 'a' },
      123,
      null,
    ];
    const expected = {
      a: [
        { id: 1, category: 'a' },
        { id: 3, category: 'a' },
      ],
    };
    expect(groupByObjectKey(array, 'category')).toEqual(expected);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => groupByObjectKey(null, 'category')).toThrow(TypeError);
    expect(() => groupByObjectKey(undefined, 'category')).toThrow(TypeError);
    expect(() => groupByObjectKey({}, 'category')).toThrow(TypeError);
    expect(() => groupByObjectKey('string', 'category')).toThrow(TypeError);
  });

  test('should throw TypeError if key argument is not a non-empty string', () => {
    const array = [{ id: 1, category: 'a' }];
    expect(() => groupByObjectKey(array, null)).toThrow(TypeError);
    expect(() => groupByObjectKey(array, undefined)).toThrow(TypeError);
    expect(() => groupByObjectKey(array, 123)).toThrow(TypeError);
    expect(() => groupByObjectKey(array, '')).toThrow(TypeError);
    expect(() => groupByObjectKey(array, {})).toThrow(TypeError);
  });
});
