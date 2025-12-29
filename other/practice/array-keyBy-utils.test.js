import { keyBy } from './array-keyBy-utils';

describe('keyBy', () => {
  test('should key elements by a function iteratee', () => {
    const users = [{
      id: 1,
      name: 'Alice'
    }, {
      id: 2,
      name: 'Bob'
    }, {
      id: 3,
      name: 'Charlie'
    }, ];
    const result = keyBy(users, user => user.id);
    expect(result).toEqual({
      1: {
        id: 1,
        name: 'Alice'
      },
      2: {
        id: 2,
        name: 'Bob'
      },
      3: {
        id: 3,
        name: 'Charlie'
      },
    });
  });

  test('should key elements by a property name', () => {
    const users = [{
      id: 1,
      name: 'Alice'
    }, {
      id: 2,
      name: 'Bob'
    }, {
      id: 3,
      name: 'Charlie'
    }, ];
    const result = keyBy(users, 'name');
    expect(result).toEqual({
      Alice: {
        id: 1,
        name: 'Alice'
      },
      Bob: {
        id: 2,
        name: 'Bob'
      },
      Charlie: {
        id: 3,
        name: 'Charlie'
      },
    });
  });

  test('should handle duplicate keys, keeping the last occurrence', () => {
    const users = [{
      id: 1,
      name: 'Alice'
    }, {
      id: 2,
      name: 'Bob'
    }, {
      id: 1,
      name: 'Charlie'
    }, ];
    const result = keyBy(users, 'id');
    expect(result).toEqual({
      1: {
        id: 1,
        name: 'Charlie'
      },
      2: {
        id: 2,
        name: 'Bob'
      },
    });
  });

  test('should handle empty array', () => {
    expect(keyBy([], 'id')).toEqual({});
  });

  test('should handle iteratee returning null or undefined', () => {
    const items = [{
      id: 1,
      type: 'A'
    }, {
      id: 2,
      type: null
    }, {
      id: 3,
      type: 'A'
    }, {
      id: 4,
      type: undefined
    }, ];
    expect(keyBy(items, 'type')).toEqual({
      A: {
        id: 3,
        type: 'A'
      },
      null: {
        id: 2,
        type: null
      },
      undefined: {
        id: 4,
        type: undefined
      },
    });
  });
});
