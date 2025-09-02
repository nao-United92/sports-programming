import { groupBy } from './group-by-utils.js';

describe('groupBy', () => {
  test('should group a collection by a given property string', () => {
    const collection = [
      { 'dir': 'left', 'code': 97 },
      { 'dir': 'right', 'code': 100 },
      { 'dir': 'left', 'code': 97 },
    ];
    const expected = {
      'left': [{ 'dir': 'left', 'code': 97 }, { 'dir': 'left', 'code': 97 }],
      'right': [{ 'dir': 'right', 'code': 100 }],
    };
    expect(groupBy(collection, 'dir')).toEqual(expected);
  });

  test('should group a collection by the result of a function', () => {
    const collection = [6.1, 4.2, 6.3];
    const expected = {
      '6': [6.1, 6.3],
      '4': [4.2],
    };
    expect(groupBy(collection, Math.floor)).toEqual(expected);
  });

  test('should return an empty object for a null or undefined collection', () => {
    expect(groupBy(null, 'length')).toEqual({});
    expect(groupBy(undefined, 'length')).toEqual({});
  });

  test('should return an empty object for an empty collection', () => {
    expect(groupBy([], 'length')).toEqual({});
  });

  test('should work with items that do not have the property', () => {
    const collection = [{ a: 1 }, { b: 2 }, { a: 3 }];
    const expected = {
      '1': [{ a: 1 }],
      'undefined': [{ b: 2 }],
      '3': [{ a: 3 }],
    };
    expect(groupBy(collection, 'a')).toEqual(expected);
  });
});
