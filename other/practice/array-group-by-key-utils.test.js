// other/practice/array-group-by-key-utils.test.js

const arrayGroupByKey = require('./array-group-by-key-utils');

describe('arrayGroupByKey', () => {
  test('should group objects by a specified string key', () => {
    const users = [
      { id: 1, category: 'A', name: 'Alice' },
      { id: 2, category: 'B', name: 'Bob' },
      { id: 3, category: 'A', name: 'Charlie' },
      { id: 4, category: 'C', name: 'David' },
    ];
    const grouped = arrayGroupByKey(users, 'category');
    expect(grouped).toEqual({
      A: [
        { id: 1, category: 'A', name: 'Alice' },
        { id: 3, category: 'A', name: 'Charlie' },
      ],
      B: [{ id: 2, category: 'B', name: 'Bob' }],
      C: [{ id: 4, category: 'C', name: 'David' }],
    });
  });

  test('should group objects by a specified numeric key', () => {
    const products = [
      { id: 1, price: 10, name: 'Shirt' },
      { id: 2, price: 20, name: 'Pants' },
      { id: 3, price: 10, name: 'Socks' },
    ];
    const grouped = arrayGroupByKey(products, 'price');
    expect(grouped).toEqual({
      10: [
        { id: 1, price: 10, name: 'Shirt' },
        { id: 3, price: 10, name: 'Socks' },
      ],
      20: [{ id: 2, price: 20, name: 'Pants' }],
    });
  });

  test('should handle items with missing keys gracefully', () => {
    const data = [
      { id: 1, type: 'A' },
      { id: 2 }, // Missing 'type'
      { id: 3, type: 'A' },
      { id: 4, type: 'B' },
    ];
    const grouped = arrayGroupByKey(data, 'type');
    expect(grouped).toEqual({
      A: [{ id: 1, type: 'A' }, { id: 3, type: 'A' }],
      B: [{ id: 4, type: 'B' }],
    });
  });

  test('should return an empty object for an empty array', () => {
    expect(arrayGroupByKey([], 'category')).toEqual({});
  });

  test('should throw TypeError if arr is not an array', () => {
    expect(() => arrayGroupByKey(null, 'key')).toThrow(TypeError);
    expect(() => arrayGroupByKey(undefined, 'key')).toThrow(TypeError);
    expect(() => arrayGroupByKey({}, 'key')).toThrow(TypeError);
  });

  test('should throw TypeError if key is not a string or empty', () => {
    const arr = [{ a: 1 }];
    expect(() => arrayGroupByKey(arr, null)).toThrow(TypeError);
    expect(() => arrayGroupByKey(arr, undefined)).toThrow(TypeError);
    expect(() => arrayGroupByKey(arr, 123)).toThrow(TypeError);
    expect(() => arrayGroupByKey(arr, '')).toThrow(TypeError);
  });
});