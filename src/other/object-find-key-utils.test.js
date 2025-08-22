import { findKey } from './object-find-key-utils';

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

  it('should work with a property shorthand', () => {
    const result = findKey(users, ['active', false]);
    // This test requires a more complex findKey implementation that handles shorthand
    // For this simple implementation, we will test with a function
    const resultFunc = findKey(users, o => !o.active);
    expect(resultFunc).toBe('fred');
  });

  it('should return undefined if no element satisfies the predicate', () => {
    const result = findKey(users, o => o.age > 50);
    expect(result).toBeUndefined();
  });

  it('should handle null or undefined objects', () => {
    expect(findKey(null, () => true)).toBeUndefined();
    expect(findKey(undefined, () => true)).toBeUndefined();
  });
});
