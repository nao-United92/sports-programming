import arrayDifferenceBy from './array-difference-by';

describe('arrayDifferenceBy', () => {
  test('should return elements in arr1 not in arr2 based on iteratee function', () => {
    const arr1 = [{
      id: 1,
      value: 'a'
    }, {
      id: 2,
      value: 'b'
    }, {
      id: 3,
      value: 'c'
    }];
    const arr2 = [{
      id: 3,
      value: 'x'
    }, {
      id: 4,
      value: 'y'
    }];
    const iteratee = (obj) => obj.id;
    expect(arrayDifferenceBy(arr1, arr2, iteratee)).toEqual([{
      id: 1,
      value: 'a'
    }, {
      id: 2,
      value: 'b'
    }]);
  });

  test('should handle empty arr1', () => {
    const arr1 = [];
    const arr2 = [{
      id: 1,
      value: 'a'
    }];
    const iteratee = (obj) => obj.id;
    expect(arrayDifferenceBy(arr1, arr2, iteratee)).toEqual([]);
  });

  test('should handle empty arr2', () => {
    const arr1 = [{
      id: 1,
      value: 'a'
    }];
    const arr2 = [];
    const iteratee = (obj) => obj.id;
    expect(arrayDifferenceBy(arr1, arr2, iteratee)).toEqual([{
      id: 1,
      value: 'a'
    }]);
  });

  test('should handle both arrays empty', () => {
    const arr1 = [];
    const arr2 = [];
    const iteratee = (obj) => obj.id;
    expect(arrayDifferenceBy(arr1, arr2, iteratee)).toEqual([]);
  });

  test('should handle iteratee that returns primitive values', () => {
    const arr1 = [1.2, 2.3, 3.4];
    const arr2 = [1.5, 3.6];
    const iteratee = Math.floor;
    expect(arrayDifferenceBy(arr1, arr2, iteratee)).toEqual([2.3]);
  });

  test('should throw an error if arr1 is not an array', () => {
    const arr2 = [];
    const iteratee = (obj) => obj.id;
    expect(() => arrayDifferenceBy(null, arr2, iteratee)).toThrow('Expected both arguments to be arrays.');
  });

  test('should throw an error if arr2 is not an array', () => {
    const arr1 = [];
    const iteratee = (obj) => obj.id;
    expect(() => arrayDifferenceBy(arr1, null, iteratee)).toThrow('Expected both arguments to be arrays.');
  });

  test('should throw an error if iteratee is not a function', () => {
    const arr1 = [];
    const arr2 = [];
    expect(() => arrayDifferenceBy(arr1, arr2, 'not a function')).toThrow('Expected a function for the third argument (iteratee).');
  });
});
