import withoutFalsey from './array-without-falsey-utils';

describe('withoutFalsey', () => {
  test('should remove all falsey values from an array', () => {
    const array = [0, 1, false, 2, '', 3, null, 'a', undefined, NaN, 4];
    expect(withoutFalsey(array)).toEqual([1, 2, 3, 'a', 4]);
  });

  test('should return an empty array if all values are falsey', () => {
    const array = [0, false, '', null, undefined, NaN];
    expect(withoutFalsey(array)).toEqual([]);
  });

  test('should return the same array if no values are falsey', () => {
    const array = [1, 'hello', true, {},
      []
    ];
    expect(withoutFalsey(array)).toEqual([1, 'hello', true, {},
      []
    ]);
  });

  test('should handle an empty array', () => {
    expect(withoutFalsey([])).toEqual([]);
  });

  test('should not modify the original array', () => {
    const originalArray = [0, 1, false];
    withoutFalsey(originalArray);
    expect(originalArray).toEqual([0, 1, false]);
  });

  test('should throw TypeError if argument is not an array', () => {
    expect(() => withoutFalsey(null)).toThrow(TypeError);
    expect(() => withoutFalsey(undefined)).toThrow(TypeError);
    expect(() => withoutFalsey('string')).toThrow(TypeError);
    expect(() => withoutFalsey(123)).toThrow(TypeError);
    expect(() => withoutFalsey({})).toThrow(TypeError);
  });
});