const findKey = require('./find-key-utils');

describe('findKey', () => {
  const users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
  };

  it('should return the key of the first element predicate returns truthy for', () => {
    const result = findKey(users, o => o.age < 40);
    expect(result).toBe('barney');
  });

  it('should return undefined if no element satisfies the predicate', () => {
    const result = findKey(users, o => o.age > 50);
    expect(result).toBeUndefined();
  });

  it('should work with a property shorthand', () => {
    const result = findKey(users, { 'age': 1, 'active': true });
    // This test will fail, my implementation doesn't support object shorthand
    // I will fix the implementation
    expect(result).toBe('pebbles');
  });
  
  it('should return undefined for null or undefined objects', () => {
    expect(findKey(null, o => o.active)).toBeUndefined();
    expect(findKey(undefined, o => o.active)).toBeUndefined();
  });
});
