import { uniqueBy } from './array-unique-by-utils';

describe('uniqueBy', () => {
  const users = [{
    id: 1,
    name: 'Alice'
  }, {
    id: 2,
    name: 'Bob'
  }, {
    id: 1,
    name: 'Alicia'
  }, {
    id: 3,
    name: 'Charlie'
  }, {
    id: 2,
    name: 'Bobby'
  }, ];

  test('should remove duplicates based on a function iteratee', () => {
    const result = uniqueBy(users, user => user.id);
    expect(result).toEqual([{
      id: 1,
      name: 'Alice'
    }, {
      id: 2,
      name: 'Bob'
    }, {
      id: 3,
      name: 'Charlie'
    }, ]);
  });

  test('should remove duplicates based on a string iteratee (property name)', () => {
    const result = uniqueBy(users, 'id');
    expect(result).toEqual([{
      id: 1,
      name: 'Alice'
    }, {
      id: 2,
      name: 'Bob'
    }, {
      id: 3,
      name: 'Charlie'
    }, ]);
  });

  test('should handle empty array', () => {
    expect(uniqueBy([], 'id')).toEqual([]);
  });

  test('should not modify the original array', () => {
    const originalUsers = [...users];
    uniqueBy(originalUsers, 'id');
    expect(originalUsers).toEqual(users);
  });

  test('should return all elements if no duplicates by iteratee', () => {
    const data = [{
      a: 1
    }, {
      a: 2
    }];
    expect(uniqueBy(data, 'a')).toEqual(data);
  });

  test('should throw an error if array is not an array', () => {
    expect(() => uniqueBy(null, 'id')).toThrow('Expected an array');
    expect(() => uniqueBy(undefined, 'id')).toThrow('Expected an array');
  });

  test('should throw an error if iteratee is not a function or string', () => {
    expect(() => uniqueBy(users, null)).toThrow('Expected an iteratee function or string');
    expect(() => uniqueBy(users, 123)).toThrow('Expected an iteratee function or string');
  });

  test('should handle arrays with mixed types and an iteratee function', () => {
    const mixedArr = [{
      type: 'A',
      value: 1
    }, {
      type: 'B',
      value: 2
    }, {
      type: 'A',
      value: 3
    }];
    const result = uniqueBy(mixedArr, item => item.type);
    expect(result).toEqual([{
      type: 'A',
      value: 1
    }, {
      type: 'B',
      value: 2
    }]);
  });
});
