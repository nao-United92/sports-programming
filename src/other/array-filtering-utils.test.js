import { filterBy, filterByQuery } from './array-filtering-utils';

describe('array-filtering-utils', () => {
  const users = [
    { id: 1, name: 'John Doe', city: 'New York' },
    { id: 2, name: 'Jane Doe', city: 'London' },
    { id: 3, name: 'John Smith', city: 'New York' },
  ];

  describe('filterBy', () => {
    test('should filter an array of objects by a key-value pair', () => {
      expect(filterBy(users, 'city', 'New York')).toEqual([
        { id: 1, name: 'John Doe', city: 'New York' },
        { id: 3, name: 'John Smith', city: 'New York' },
      ]);
    });

    test('should return an empty array if no matches are found', () => {
      expect(filterBy(users, 'city', 'Tokyo')).toEqual([]);
    });
  });

  describe('filterByQuery', () => {
    test('should filter an array of objects by a search query', () => {
      expect(filterByQuery(users, 'john')).toEqual([
        { id: 1, name: 'John Doe', city: 'New York' },
        { id: 3, name: 'John Smith', city: 'New York' },
      ]);
    });

    test('should be case-insensitive', () => {
      expect(filterByQuery(users, 'JOHN')).toEqual([
        { id: 1, name: 'John Doe', city: 'New York' },
        { id: 3, name: 'John Smith', city: 'New York' },
      ]);
    });

    test('should return an empty array if no matches are found', () => {
      expect(filterByQuery(users, 'nonexistent')).toEqual([]);
    });
  });
});
