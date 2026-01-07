const { map } = require('./array-map-utils');

describe('map', () => {
  test('should apply a function to each element of an array and return a new array', () => {
    const array = [1, 2, 3];
    expect(map(array, (x) => x * 2)).toEqual([2, 4, 6]);
  });

  test('should return an empty array if given an empty array', () => {
    expect(map([], (x) => x * 2)).toEqual([]);
  });

  test('should pass element, index, and array to the callback', () => {
    const array = [1, 2, 3];
    const mockCallback = jest.fn((x) => x * 2);
    map(array, mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(1, 0, array);
    expect(mockCallback).toHaveBeenCalledWith(2, 1, array);
    expect(mockCallback).toHaveBeenCalledWith(3, 2, array);
    expect(mockCallback).toHaveBeenCalledTimes(3);
  });

  test('should not mutate the original array', () => {
    const array = [1, 2, 3];
    const originalArray = [...array];
    map(array, (x) => x * 2);
    expect(array).toEqual(originalArray);
  });

  test('should throw TypeError if the first argument is not an array', () => {
    expect(() => map(null, (x) => x)).toThrow(TypeError);
    expect(() => map(null, (x) => x)).toThrow('Expected an array for the first argument.');
    expect(() => map(undefined, (x) => x)).toThrow(TypeError);
    expect(() => map({}, (x) => x)).toThrow(TypeError);
  });

  test('should throw TypeError if the second argument is not a function', () => {
    const array = [1, 2, 3];
    expect(() => map(array, null)).toThrow(TypeError);
    expect(() => map(array, null)).toThrow('Expected a function for the second argument.');
    expect(() => map(array, undefined)).toThrow(TypeError);
    expect(() => map(array, 'not a function')).toThrow(TypeError);
  });
});
