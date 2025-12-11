const groupBy = require('./array-group-by-extended-utils');

describe('groupBy', () => {
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
  }, {
    id: 4,
    name: 'David',
    age: 25
  }, ];

  test('should group an array of objects by a string property', () => {
    const groupedByAge = groupBy(users, 'age');
    expect(groupedByAge).toEqual({
      '30': [{
        id: 1,
        name: 'Alice',
        age: 30
      }, {
        id: 3,
        name: 'Charlie',
        age: 30
      }, ],
      '25': [{
        id: 2,
        name: 'Bob',
        age: 25
      }, {
        id: 4,
        name: 'David',
        age: 25
      }, ],
    });
  });

  test('should group an array of objects by an iteratee function', () => {
    const groupedByNameLength = groupBy(users, (user) => user.name.length);

    // Corrected expected output for name length:
    const expectedByNameLength = {
      '5': [{
        id: 1,
        name: 'Alice',
        age: 30
      }, {
        id: 4,
        name: 'David',
        age: 25
      }],
      '3': [{
        id: 2,
        name: 'Bob',
        age: 25
      }],
      '7': [{
        id: 3,
        name: 'Charlie',
        age: 30
      }]
    };
    expect(groupedByNameLength).toEqual(expectedByNameLength);
  });


  test('should handle empty array', () => {
    expect(groupBy([], 'age')).toEqual({});
  });

  test('should handle array with null/undefined iteratee', () => {
    const arr = [{
      a: 1
    }, {
      b: 2
    }];
    expect(groupBy(arr, undefined)).toEqual({
      undefined: [{
        a: 1
      }, {
        b: 2
      }]
    });
  });

  test('should handle non-array input', () => {
    expect(groupBy(null, 'age')).toEqual({});
    expect(groupBy(undefined, 'age')).toEqual({});
    expect(groupBy(123, 'age')).toEqual({});
    expect(groupBy('string', 'age')).toEqual({});
    expect(groupBy({
      a: 1
    }, 'age')).toEqual({});
  });

  test('should handle items with missing properties', () => {
    const items = [{
      id: 1,
      type: 'A'
    }, {
      id: 2
    }, {
      id: 3,
      type: 'A'
    }];
    expect(groupBy(items, 'type')).toEqual({
      'A': [{
        id: 1,
        type: 'A'
      }, {
        id: 3,
        type: 'A'
      }],
      'undefined': [{
        id: 2
      }]
    });
  });
});
