const unionByPredicate = require('./array-union-by-predicate-utils');

describe('unionByPredicate', () => {
  test('should create a union of two arrays based on a predicate', () => {
    const arr1 = [{
      'id': 1
    }, {
      'id': 2
    }];
    const arr2 = [{
      'id': 2
    }, {
      'id': 3
    }];
    const predicate = (obj) => obj.id;
    expect(unionByPredicate(arr1, arr2, predicate)).toEqual([{
      'id': 1
    }, {
      'id': 2
    }, {
      'id': 3
    }]);
  });

  test('should handle arrays with different object properties but same unique key', () => {
    const arr1 = [{
      'id': 1,
      'name': 'A'
    }];
    const arr2 = [{
      'id': 1,
      'name': 'B'
    }, {
      'id': 2,
      'name': 'C'
    }];
    const predicate = (obj) => obj.id;
    expect(unionByPredicate(arr1, arr2, predicate)).toEqual([{
      'id': 1,
      'name': 'A'
    }, {
      'id': 2,
      'name': 'C'
    }]);
  });

  test('should return an empty array if inputs are not arrays', () => {
    const predicate = (obj) => obj.id;
    expect(unionByPredicate(null, [], predicate)).toEqual([]);
    expect(unionByPredicate([], undefined, predicate)).toEqual([]);
    expect(unionByPredicate({}, [], predicate)).toEqual([]);
  });

  test('should return an empty array if predicate is not a function', () => {
    expect(unionByPredicate([{
      'id': 1
    }], [{
      'id': 2
    }], null)).toEqual([]);
    expect(unionByPredicate([{
      'id': 1
    }], [{
      'id': 2
    }], 'id')).toEqual([]);
  });

  test('should handle empty arrays', () => {
    const predicate = (obj) => obj.id;
    expect(unionByPredicate([], [], predicate)).toEqual([]);
    expect(unionByPredicate([{
      'id': 1
    }], [], predicate)).toEqual([{
      'id': 1
    }]);
    expect(unionByPredicate([], [{
      'id': 1
    }], predicate)).toEqual([{
      'id': 1
    }]);
  });

  test('should work with primitive values and a predicate', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 4, 5];
    const predicate = (val) => val % 2 === 0 ? 'even' : 'odd'; // Group by even/odd
    // This predicate makes everything unique in terms of even/odd.
    // The first 'odd' (1), first 'even' (2), second 'odd' (3, but 'odd' already seen), second 'even' (4), third 'odd' (5)
    // No, this predicate is not for uniqueness of the value itself, but for a characteristic.
    // If we want a standard union, we'd use a different predicate or no predicate.
    // For "unique values from all given arrays using a predicate function to determine uniqueness",
    // it means if predicate(item1) == predicate(item2), they are considered same.
    // So for 1, predicate(1)='odd'. For 2, predicate(2)='even'. For 3, predicate(3)='odd'. For 4, predicate(4)='even'. For 5, predicate(5)='odd'.
    // Result should be first 'odd', first 'even'.
    expect(unionByPredicate(arr1, arr2, predicate)).toEqual([1, 2]);
  });
});
