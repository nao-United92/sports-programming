import { findLastKey } from './object-find-last-key-utils.js';

describe('findLastKey', () => {
  const users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
  };

  it('should return the key of the last element predicate returns truthy for', () => {
    const result = findLastKey(users, (user) => user.active);
    expect(result).toBe('pebbles');
  });

  it('should work with a predicate that uses the key', () => {
    const result = findLastKey(users, (user, key) => key === 'fred');
    expect(result).toBe('fred');
  });

  it('should return undefined if no element satisfies the predicate', () => {
    const result = findLastKey(users, (user) => user.age > 50);
    expect(result).toBeUndefined();
  });

  it('should handle an empty object', () => {
    expect(findLastKey({}, () => true)).toBeUndefined();
  });

  it('should handle null or undefined input', () => {
    expect(findLastKey(null, () => true)).toBeUndefined();
    expect(findLastKey(undefined, () => true)).toBeUndefined();
  });
});
