const uniqueElements = require('./array-unique-elements-utils');

describe('uniqueElements', () => {
  test('should return unique elements from an array of primitives', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    expect(uniqueElements(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return unique elements from an array of strings', () => {
    const arr = ['apple', 'banana', 'apple', 'orange', 'banana'];
    expect(uniqueElements(arr)).toEqual(['apple', 'banana', 'orange']);
  });

  test('should return unique objects based on a specified key', () => {
    const arr = [{
      id: 1,
      name: 'A'
    }, {
      id: 2,
      name: 'B'
    }, {
      id: 1,
      name: 'C'
    }, {
      id: 3,
      name: 'D'
    }];
    expect(uniqueElements(arr, 'id')).toEqual([{
      id: 1,
      name: 'A'
    }, {
      id: 2,
      name: 'B'
    }, {
      id: 3,
      name: 'D'
    }]);
  });

  test('should return all elements if all are unique', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(uniqueElements(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle empty array', () => {
    expect(uniqueElements([])).toEqual([]);
  });

  test('should throw an error for non-array input', () => {
    expect(() => uniqueElements(null)).toThrow('Input must be an array.');
    expect(() => uniqueElements(undefined)).toThrow('Input must be an array.');
    expect(() => uniqueElements('string')).toThrow('Input must be an array.');
    expect(() => uniqueElements(123)).toThrow('Input must be an array.');
    expect(() => uniqueElements({})).toThrow('Input must be an array.');
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, '1', 2, {
      a: 1
    }, {
      a: 1
    }, null, null, undefined, undefined];
    expect(uniqueElements(arr)).toEqual([1, '1', 2, {
      a: 1
    }, {
      a: 1
    }, null, undefined]); // Set handles objects as unique by reference
  });

  test('should handle objects with non-primitive key values', () => {
    const obj1 = {
      id: {
        val: 1
      },
      name: 'A'
    };
    const obj2 = {
      id: {
        val: 1
      },
      name: 'B'
    };
    const obj3 = {
      id: {
        val: 2
      },
      name: 'C'
    };
    const arr = [obj1, obj2, obj3];
    // When key is an object, it will be compared by reference in the Set.
    // So obj1.id and obj2.id are different objects, even if their content is same.
    expect(uniqueElements(arr, 'id')).toEqual([obj1, obj3]);
  });
});
