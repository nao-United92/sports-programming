import arrayDeepMerge from './array-deep-merge-utils';

describe('arrayDeepMerge', () => {
  test('should deep merge two arrays of objects based on idKey', () => {
    const target = [
      { id: 1, name: 'Apple', details: { color: 'red', taste: 'sweet' } },
      { id: 2, name: 'Banana', details: { color: 'yellow' } },
    ];
    const source = [
      { id: 1, price: 1.0, details: { origin: 'USA' } },
      { id: 3, name: 'Orange', price: 1.5, details: { color: 'orange' } },
    ];
    const expected = [
      { id: 1, name: 'Apple', details: { color: 'red', taste: 'sweet', origin: 'USA' }, price: 1.0 },
      { id: 2, name: 'Banana', details: { color: 'yellow' } },
      { id: 3, name: 'Orange', price: 1.5, details: { color: 'orange' } },
    ];
    expect(arrayDeepMerge(target, source)).toEqual(expected);
  });

  test('should handle empty target array', () => {
    const target = [];
    const source = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
    ];
    expect(arrayDeepMerge(target, source)).toEqual(source);
  });

  test('should handle empty source array', () => {
    const target = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
    ];
    const source = [];
    expect(arrayDeepMerge(target, source)).toEqual(target);
  });

  test('should handle both arrays being empty', () => {
    expect(arrayDeepMerge([], [])).toEqual([]);
  });

  test('should deep merge nested arrays within objects by concatenating them', () => {
    const target = [
      { id: 1, data: { tags: ['a', 'b'] } },
    ];
    const source = [
      { id: 1, data: { tags: ['c', 'd'] } },
    ];
    const expected = [
      { id: 1, data: { tags: ['a', 'b', 'c', 'd'] } },
    ];
    expect(arrayDeepMerge(target, source)).toEqual(expected);
  });

  test('should handle different idKey', () => {
    const target = [
      { uuid: 'a', value: 1 },
    ];
    const source = [
      { uuid: 'a', value: 2, newProp: 'test' },
      { uuid: 'b', value: 3 },
    ];
    const expected = [
      { uuid: 'a', value: 2, newProp: 'test' },
      { uuid: 'b', value: 3 },
    ];
    expect(arrayDeepMerge(target, source, 'uuid')).toEqual(expected);
  });

  test('should add new items if no matching id is found', () => {
    const target = [{ id: 1, name: 'One' }];
    const source = [{ id: 2, name: 'Two' }];
    const expected = [{ id: 1, name: 'One' }, { id: 2, name: 'Two' }];
    expect(arrayDeepMerge(target, source)).toEqual(expected);
  });

  test('should throw TypeError if target is not an array', () => {
    expect(() => arrayDeepMerge({}, [])).toThrow(TypeError);
    expect(() => arrayDeepMerge(null, [])).toThrow(TypeError);
  });

  test('should throw TypeError if source is not an array', () => {
    const target = [{ id: 1 }];
    expect(() => arrayDeepMerge(target, {})).toThrow(TypeError);
    expect(() => arrayDeepMerge(target, null)).toThrow(TypeError);
  });

  test('should handle non-object items in arrays (they will be treated as non-mergeable and added if not already present)', () => {
    const target = [1, { id: 2, value: 'b' }];
    const source = [3, { id: 2, value: 'c' }, { id: 4, value: 'd' }];
    const expected = [1, { id: 2, value: 'c' }, 3, { id: 4, value: 'd' }];
    // Note: The non-object '1' from target array remains at its original position, '3' is added to the end.
    // This behavior might need refinement based on exact requirements for non-object elements.
    // For now, it means non-object items from source are simply appended if no matching id is found (which they won't have).
    expect(arrayDeepMerge(target, source)).toEqual(expected);
  });
});