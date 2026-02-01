const arrayPartitionElements = require('./array-partition-elements');

describe('arrayPartitionElements', () => {
  test('should partition numbers into even and odd', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const [evens, odds] = arrayPartitionElements(arr, num => num % 2 === 0);
    expect(evens).toEqual([2, 4, 6]);
    expect(odds).toEqual([1, 3, 5]);
  });

  test('should partition strings based on length', () => {
    const arr = ['apple', 'cat', 'banana', 'dog', 'elephant'];
    const [longWords, shortWords] = arrayPartitionElements(arr, word => word.length > 4);
    expect(longWords).toEqual(['apple', 'banana', 'elephant']);
    expect(shortWords).toEqual(['cat', 'dog']);
  });

  test('should handle an empty array', () => {
    const [result1, result2] = arrayPartitionElements([], () => true);
    expect(result1).toEqual([]);
    expect(result2).toEqual([]);
  });

  test('should place all elements in the first array if predicate is always true', () => {
    const arr = [1, 2, 3];
    const [result1, result2] = arrayPartitionElements(arr, () => true);
    expect(result1).toEqual([1, 2, 3]);
    expect(result2).toEqual([]);
  });

  test('should place all elements in the second array if predicate is always false', () => {
    const arr = ['a', 'b', 'c'];
    const [result1, result2] = arrayPartitionElements(arr, () => false);
    expect(result1).toEqual([]);
    expect(result2).toEqual(['a', 'b', 'c']);
  });

  test('should partition objects based on a property', () => {
    const users = [{
      name: 'Alice',
      admin: true
    }, {
      name: 'Bob',
      admin: false
    }, {
      name: 'Charlie',
      admin: true
    }];
    const [admins, nonAdmins] = arrayPartitionElements(users, user => user.admin);
    expect(admins).toEqual([{
      name: 'Alice',
      admin: true
    }, {
      name: 'Charlie',
      admin: true
    }]);
    expect(nonAdmins).toEqual([{
      name: 'Bob',
      admin: false
    }]);
  });

  test('should use index and original array in predicate', () => {
    const arr = [10, 20, 30, 40];
    const [firstHalf, secondHalf] = arrayPartitionElements(arr, (num, index, array) => index < array.length / 2);
    expect(firstHalf).toEqual([10, 20]);
    expect(secondHalf).toEqual([30, 40]);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => arrayPartitionElements(null, () => true)).toThrow(TypeError);
    expect(() => arrayPartitionElements(undefined, () => true)).toThrow(TypeError);
    expect(() => arrayPartitionElements({}, () => true)).toThrow(TypeError);
    expect(() => arrayPartitionElements('string', () => true)).toThrow(TypeError);
  });

  test('should throw TypeError if second argument is not a function', () => {
    const arr = [1, 2, 3];
    expect(() => arrayPartitionElements(arr, null)).toThrow(TypeError);
    expect(() => arrayPartitionElements(arr, undefined)).toThrow(TypeError);
    expect(() => arrayPartitionElements(arr, 'not-a-function')).toThrow(TypeError);
    expect(() => arrayPartitionElements(arr, 123)).toThrow(TypeError);
  });
});
