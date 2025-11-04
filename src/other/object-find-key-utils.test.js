import { findKey } from './object-find-key-utils.js';

describe('findKey', () => {
  const users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
  };

  test('should find a key based on a predicate function', () => {
    const result = findKey(users, o => o.age < 40);
    expect(result).toBe('barney');
  });

  test('should return undefined if no key is found', () => {
    const result = findKey(users, o => o.age > 50);
    expect(result).toBe(undefined);
  });

  test('should pass value, key, and object to the predicate', () => {
    const predicate = jest.fn();
    findKey({ a: 1 }, predicate);
    expect(predicate).toHaveBeenCalledWith(1, 'a', { a: 1 });
  });

  test('should return undefined for null or undefined input', () => {
    expect(findKey(null, () => true)).toBe(undefined);
    expect(findKey(undefined, () => true)).toBe(undefined);
  });
});