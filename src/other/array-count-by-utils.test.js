import { countBy } from './array-count-by-utils';

describe('countBy', () => {
  test('should count elements by a function', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': false },
      { 'user': 'fred', 'active': true }
    ];

    const result = countBy(users, value => value.active);
    expect(result).toEqual({ 'true': 2, 'false': 1 });
  });

  test('should count elements by a property name', () => {
    const collection = [6.1, 4.2, 6.3];
    const result = countBy(collection, Math.floor);
    expect(result).toEqual({ '4': 1, '6': 2 });
  });

  test('should handle empty collection', () => {
    const collection = [];
    const result = countBy(collection, Math.floor);
    expect(result).toEqual({});
  });

  test('should count strings by length', () => {
    const collection = ['one', 'two', 'three', 'four'];
    const result = countBy(collection, 'length');
    expect(result).toEqual({ '3': 2, '4': 1, '5': 1 });
  });

  test('should handle null or undefined values in collection', () => {
    const collection = [null, 1, undefined, 2, null];
    const result = countBy(collection, item => item === null ? 'null' : (item === undefined ? 'undefined' : 'value'));
    expect(result).toEqual({ 'null': 2, 'undefined': 1, 'value': 2 });
  });
});
