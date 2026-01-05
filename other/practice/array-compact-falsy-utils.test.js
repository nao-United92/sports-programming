const arrayCompactFalsy = require('./array-compact-falsy-utils');

describe('arrayCompactFalsy', () => {
  test('should remove all falsy values from an array', () => {
    const arr = [0, 1, false, 2, '', 3, null, 'a', undefined, NaN, 'b'];
    expect(arrayCompactFalsy(arr)).toEqual([1, 2, 3, 'a', 'b']);
  });

  test('should return an empty array if all values are falsy', () => {
    const arr = [0, false, '', null, undefined, NaN];
    expect(arrayCompactFalsy(arr)).toEqual([]);
  });

  test('should return the same array if no falsy values are present', () => {
    const arr = [1, 'hello', true, {},
      []
    ];
    expect(arrayCompactFalsy(arr)).toEqual([1, 'hello', true, {},
      []
    ]);
  });

  test('should handle an empty array', () => {
    const arr = [];
    expect(arrayCompactFalsy(arr)).toEqual([]);
  });

  test('should not modify the original array', () => {
    const arr = [0, 1, false];
    arrayCompactFalsy(arr);
    expect(arr).toEqual([0, 1, false]);
  });

  test('should throw TypeError if argument is not an array', () => {
    expect(() => arrayCompactFalsy(null)).toThrow(TypeError);
    expect(() => arrayCompactFalsy(123)).toThrow(TypeError);
    expect(() => arrayCompactFalsy('string')).toThrow(TypeError);
  });
});
