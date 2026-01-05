const arrayPluck = require('./array-pluck-utils');

describe('arrayPluck', () => {
  test('should extract values of a specified key from an array of objects', () => {
    const users = [{
      id: 1,
      name: 'Alice'
    }, {
      id: 2,
      name: 'Bob'
    }, {
      id: 3,
      name: 'Charlie'
    }, ];
    expect(arrayPluck(users, 'name')).toEqual(['Alice', 'Bob', 'Charlie']);
  });

  test('should handle objects where the key is missing by returning undefined', () => {
    const users = [{
      id: 1,
      name: 'Alice'
    }, {
      id: 2
    }, {
      id: 3,
      name: 'Charlie'
    }, ];
    expect(arrayPluck(users, 'name')).toEqual(['Alice', undefined, 'Charlie']);
  });

  test('should handle arrays with non-object elements', () => {
    const mixedArray = [{
      name: 'Alice'
    }, null, 123, {
      name: 'Bob'
    }];
    expect(arrayPluck(mixedArray, 'name')).toEqual(['Alice', undefined, undefined, 'Bob']);
  });

  test('should handle an empty array', () => {
    const emptyArray = [];
    expect(arrayPluck(emptyArray, 'name')).toEqual([]);
  });

  test('should handle a key that does not exist in any object', () => {
    const users = [{
      id: 1,
      name: 'Alice'
    }, {
      id: 2,
      name: 'Bob'
    }, ];
    expect(arrayPluck(users, 'email')).toEqual([undefined, undefined]);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => arrayPluck(null, 'name')).toThrow(TypeError);
    expect(() => arrayPluck(123, 'name')).toThrow(TypeError);
    expect(() => arrayPluck('string', 'name')).toThrow(TypeError);
  });

  test('should throw TypeError if key is not a string or symbol', () => {
    const users = [{
      id: 1,
      name: 'Alice'
    }];
    expect(() => arrayPluck(users, null)).toThrow(TypeError);
    expect(() => arrayPluck(users, 123)).toThrow(TypeError);
    expect(() => arrayPluck(users, {})).toThrow(TypeError);
  });
});
