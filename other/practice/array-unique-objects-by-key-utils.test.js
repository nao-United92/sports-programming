import uniqueObjectsByKey from './array-unique-objects-by-key-utils';

describe('uniqueObjectsByKey', () => {
  test('should return an array of unique objects based on a specified key', () => {
    const data = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 1, name: 'Red Apple' },
      { id: 3, name: 'Orange' },
      { id: 2, name: 'Yellow Banana' },
    ];
    const expected = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Orange' },
    ];
    expect(uniqueObjectsByKey(data, 'id')).toEqual(expected);
  });

  test('should handle an empty array', () => {
    expect(uniqueObjectsByKey([], 'id')).toEqual([]);
  });

  test('should return all objects if all keys are unique', () => {
    const data = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Orange' },
    ];
    expect(uniqueObjectsByKey(data, 'id')).toEqual(data);
  });

  test('should handle missing keys by treating them as unique (undefined)', () => {
    const data = [
      { id: 1, name: 'Apple' },
      { name: 'No ID Fruit' },
      { id: 2, name: 'Banana' },
      { id: 1, name: 'Red Apple' },
      { name: 'Another No ID Fruit' },
    ];
    const expected = [
      { id: 1, name: 'Apple' },
      { name: 'No ID Fruit' },
      { id: 2, name: 'Banana' },
      { name: 'Another No ID Fruit' },
    ];
    expect(uniqueObjectsByKey(data, 'id')).toEqual(expected);
  });

  test('should ignore non-object elements in the array', () => {
    const data = [
      { id: 1, name: 'Apple' },
      'string',
      123,
      { id: 2, name: 'Banana' },
      null,
      undefined,
      { id: 1, name: 'Red Apple' },
    ];
    const expected = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
    ];
    expect(uniqueObjectsByKey(data, 'id')).toEqual(expected);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => uniqueObjectsByKey(null, 'id')).toThrow(TypeError);
    expect(() => uniqueObjectsByKey({}, 'id')).toThrow(TypeError);
  });

  test('should throw TypeError if key argument is not a non-empty string', () => {
    const data = [{ id: 1 }];
    expect(() => uniqueObjectsByKey(data, null)).toThrow(TypeError);
    expect(() => uniqueObjectsByKey(data, '')).toThrow(TypeError);
    expect(() => uniqueObjectsByKey(data, 123)).toThrow(TypeError);
  });
});