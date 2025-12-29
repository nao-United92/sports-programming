import { groupBy } from './array-groupBy-utils';

describe('groupBy', () => {
  test('should group elements by a function iteratee', () => {
    const users = [{
      id: 1,
      name: 'Alice',
      age: 30
    }, {
      id: 2,
      name: 'Bob',
      age: 25
    }, {
      id: 3,
      name: 'Charlie',
      age: 30
    }, ];
    const result = groupBy(users, user => user.age);
    expect(result).toEqual({
      30: [{
        id: 1,
        name: 'Alice',
        age: 30
      }, {
        id: 3,
        name: 'Charlie',
        age: 30
      }, ],
      25: [{
        id: 2,
        name: 'Bob',
        age: 25
      }, ],
    });
  });

  test('should group elements by a property name', () => {
    const users = [{
      id: 1,
      name: 'Alice',
      age: 30
    }, {
      id: 2,
      name: 'Bob',
      age: 25
    }, {
      id: 3,
      name: 'Charlie',
      age: 30
    }, ];
    const result = groupBy(users, 'age');
    expect(result).toEqual({
      30: [{
        id: 1,
        name: 'Alice',
        age: 30
      }, {
        id: 3,
        name: 'Charlie',
        age: 30
      }, ],
      25: [{
        id: 2,
        name: 'Bob',
        age: 25
      }, ],
    });
  });

  test('should handle empty array', () => {
    expect(groupBy([], user => user.age)).toEqual({});
  });

  test('should handle array with single element', () => {
    const users = [{
      id: 1,
      name: 'Alice',
      age: 30
    }];
    expect(groupBy(users, 'age')).toEqual({
      30: [{
        id: 1,
        name: 'Alice',
        age: 30
      }]
    });
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
    expect(groupBy(items, 'type')).toEqual({
      A: [{
        id: 1,
        type: 'A'
      }, {
        id: 3,
        type: 'A'
      }],
      null: [{
        id: 2,
        type: null
      }],
      undefined: [{
        id: 4,
        type: undefined
      }],
    });
  });
});
