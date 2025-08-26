import { findIndex, findLastIndex } from './array-find-index-utils.js';

describe('findIndex and findLastIndex', () => {
  const users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true },
    { 'user': 'barney',  'active': true }
  ];

  describe('findIndex', () => {
    it('should find index using a function predicate', () => {
      const result = findIndex(users, (o) => o.user === 'pebbles');
      expect(result).toBe(2);
    });

    it('should find index using an object predicate (matches property)', () => {
      const result = findIndex(users, { 'user': 'fred', 'active': false });
      expect(result).toBe(1);
    });

    it('should find index using an array predicate (matches property value)', () => {
      const result = findIndex(users, ['active', false]);
      expect(result).toBe(0);
    });

    it('should start searching from a given index', () => {
      const result = findIndex(users, ['active', false], 1);
      expect(result).toBe(1);
    });
  });

  describe('findLastIndex', () => {
    it('should find last index using a function predicate', () => {
      const result = findLastIndex(users, (o) => o.user === 'barney');
      expect(result).toBe(3);
    });

    it('should find last index using an object predicate', () => {
      const result = findLastIndex(users, { 'user': 'barney', 'active': false });
      expect(result).toBe(0);
    });

    it('should find last index using an array predicate', () => {
      const result = findLastIndex(users, ['active', true]);
      expect(result).toBe(3);
    });

    it('should start searching from a given index backwards', () => {
      const result = findLastIndex(users, (o) => o.user === 'barney', 2);
      expect(result).toBe(0);
    });
  });
});
