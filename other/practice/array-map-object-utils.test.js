import { mapObject } from './array-map-object-utils.js';

describe('mapObject', () => {
  test('should map an array to an object', () => {
    const arr = [1, 2, 3];
    const fn = (x) => [x, x * 2];
    expect(mapObject(arr, fn)).toEqual({ '1': 2, '2': 4, '3': 6 });
  });

  test('should work with different key/value types', () => {
    const arr = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }];
    const fn = (x) => [x.id, x.name];
    expect(mapObject(arr, fn)).toEqual({ '1': 'a', '2': 'b' });
  });

  test('should return an empty object for an empty array', () => {
    expect(mapObject([], (x) => [x, x])).toEqual({});
  });
});
