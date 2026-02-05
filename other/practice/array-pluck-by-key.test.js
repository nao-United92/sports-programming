const { pluck } = require('./array-pluck-by-key');

describe('pluck', () => {
  const users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: null, age: 28 }
  ];

  it('should pluck values by a specified key', () => {
    expect(pluck(users, 'name')).toEqual(['Alice', 'Bob', 'Charlie', null]);
  });

  it('should pluck undefined for non-existent keys', () => {
    expect(pluck(users, 'email')).toEqual([undefined, undefined, undefined, undefined]);
  });

  it('should handle an empty array', () => {
    expect(pluck([], 'name')).toEqual([]);
  });

  it('should handle array with non-object elements', () => {
    expect(pluck([1, 2, { name: 'test' }], 'name')).toEqual([undefined, undefined, 'test']);
  });
  
  it('should throw an error if not given an array as the first argument', () => {
    expect(() => pluck('not an array', 'name')).toThrow(TypeError);
  });

  it('should throw an error if key is not a string, number, or symbol', () => {
    expect(() => pluck(users, null)).toThrow(TypeError);
    expect(() => pluck(users, {})).toThrow(TypeError);
  });
});
