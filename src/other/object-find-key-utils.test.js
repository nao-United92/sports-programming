import { findKey } from './object-find-key-utils.js';

describe('findKey', () => {
  const users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
  };

  it('should return the key of the first element predicate returns truthy for', () => {
    const result = findKey(users, (user) => user.age < 40);
    expect(result).toBe('barney');
  });

  it('should work with a predicate that uses the key', () => {
    const result = findKey(users, (user, key) => key === 'fred');
    expect(result).toBe('fred');
  });

  it('should return undefined if no element satisfies the predicate', () => {
    const result = findKey(users, (user) => user.age > 50);
    expect(result).toBeUndefined();
  });

  it('should handle an empty object', () => {
    expect(findKey({}, () => true)).toBeUndefined();
  });

  it('should handle null or undefined input', () => {
    expect(findKey(null, () => true)).toBeUndefined();
    expect(findKey(undefined, () => true)).toBeUndefined();
  });
});
