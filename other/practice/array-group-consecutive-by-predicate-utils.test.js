const groupConsecutiveBy = require('./array-group-consecutive-by-predicate-utils');

describe('groupConsecutiveBy', () => {
  test('should group consecutive numbers by parity', () => {
    const arr = [1, 3, 2, 4, 5, 7, 6];
    const predicate = (a, b) => (a % 2) === (b % 2);
    expect(groupConsecutiveBy(arr, predicate)).toEqual([
      [1, 3],
      [2, 4],
      [5, 7],
      [6]
    ]);
  });

  test('should group consecutive strings that start with the same letter', () => {
    const arr = ['apple', 'apricot', 'banana', 'blueberry', 'cherry'];
    const predicate = (a, b) => a[0] === b[0];
    expect(groupConsecutiveBy(arr, predicate)).toEqual([
      ['apple', 'apricot'],
      ['banana', 'blueberry'],
      ['cherry']
    ]);
  });

  test('should return an empty array for an empty input array', () => {
    expect(groupConsecutiveBy([], (a, b) => true)).toEqual([]);
  });

  test('should return an array with single-element groups if no elements satisfy the predicate', () => {
    const arr = [1, 2, 3, 4, 5];
    const predicate = (a, b) => false; // Never group
    expect(groupConsecutiveBy(arr, predicate)).toEqual([
      [1],
      [2],
      [3],
      [4],
      [5]
    ]);
  });

  test('should return a single group if all elements satisfy the predicate', () => {
    const arr = [2, 4, 6, 8, 10];
    const predicate = (a, b) => (a % 2) === (b % 2); // All even
    expect(groupConsecutiveBy(arr, predicate)).toEqual([
      [2, 4, 6, 8, 10]
    ]);
  });

  test('should group objects based on a property', () => {
    const arr = [{
      id: 1,
      type: 'A'
    }, {
      id: 2,
      type: 'A'
    }, {
      id: 3,
      type: 'B'
    }, {
      id: 4,
      type: 'B'
    }, {
      id: 5,
      type: 'A'
    }];
    const predicate = (a, b) => a.type === b.type;
    expect(groupConsecutiveBy(arr, predicate)).toEqual([
      [{
        id: 1,
        type: 'A'
      }, {
        id: 2,
        type: 'A'
      }],
      [{
        id: 3,
        type: 'B'
      }, {
        id: 4,
        type: 'B'
      }],
      [{
        id: 5,
        type: 'A'
      }]
    ]);
  });

  test('should handle single element array', () => {
    const arr = [10];
    const predicate = (a, b) => a === b;
    expect(groupConsecutiveBy(arr, predicate)).toEqual([
      [10]
    ]);
  });

  test('should group by increasing sequence', () => {
    const arr = [1, 2, 3, 1, 2, 3, 4, 1];
    const predicate = (a, b) => b === a + 1;
    expect(groupConsecutiveBy(arr, predicate)).toEqual([
      [1, 2, 3],
      [1, 2, 3, 4],
      [1]
    ]);
  });
});
