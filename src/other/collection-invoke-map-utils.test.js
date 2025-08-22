import { invokeMap } from './collection-invoke-map-utils';

describe('invokeMap', () => {
  const users = [
    { 'user': 'barney', 'age': 36, 'active': true, 'greet': () => 'Hello Barney' },
    { 'user': 'fred',   'age': 40, 'active': false, 'greet': (name) => `Hello ${name}` }
  ];

  it('should invoke a method on each item in an array', () => {
    const result = invokeMap(users, 'greet');
    expect(result).toEqual(['Hello Barney', 'Hello fred']);
  });

  it('should pass arguments to the invoked method', () => {
    const result = invokeMap(users, 'greet', 'World');
    expect(result).toEqual(['Hello Barney', 'Hello World']);
  });

  it('should handle nested methods', () => {
    const obj = [
      { 'a': { 'b': () => 1 } },
      { 'a': { 'b': () => 2 } }
    ];
    const result = invokeMap(obj, 'a.b');
    expect(result).toEqual([1, 2]);
  });

  it('should handle non-existent methods', () => {
    const result = invokeMap(users, 'nonExistentMethod');
    expect(result).toEqual([undefined, undefined]);
  });

  it('should handle empty collections', () => {
    expect(invokeMap([], 'greet')).toEqual([]);
  });

  it('should handle null or undefined collections', () => {
    expect(invokeMap(null, 'greet')).toEqual([]);
    expect(invokeMap(undefined, 'greet')).toEqual([]);
  });
});
