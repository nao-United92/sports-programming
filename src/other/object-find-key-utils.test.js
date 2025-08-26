import { findKey, findLastKey } from './object-find-key-utils.js';

describe('findKey', () => {
  const users = {
    'barney':  { 'age': 36, 'active': false },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
  };

  it('should find the key of the first element that satisfies the predicate', () => {
    const result = findKey(users, (o) => o.age < 40);
    expect(result).toBe('barney');
  });

  it('should find the key using an object predicate', () => {
    const result = findKey(users, { 'age': 1, 'active': true });
    expect(result).toBe('pebbles');
  });

  it('should return undefined if no element satisfies the predicate', () => {
    const result = findKey(users, (o) => o.age > 100);
    expect(result).toBeUndefined();
  });
});

describe('findLastKey', () => {
  const users = {
    'barney':  { 'age': 36, 'active': false },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
  };

  it('should find the key of the last element that satisfies the predicate', () => {
    const result = findLastKey(users, (o) => o.age < 40);
    expect(result).toBe('pebbles');
  });

  it('should find the key using an object predicate', () => {
    const result = findLastKey(users, { 'age': 40, 'active': false });
    expect(result).toBe('fred');
  });

  it('should return undefined if no element satisfies the predicate', () => {
    const result = findLastKey(users, (o) => o.age > 100);
    expect(result).toBeUndefined();
  });
});