import arrayUniqueBy from './array-unique-by';

describe('arrayUniqueBy', () => {
  test('should return unique objects based on a property', () => {
    const arr = [{id: 1, name: 'A'}, {id: 2, name: 'B'}, {id: 1, name: 'C'}];
    const iteratee = (item) => item.id;
    expect(arrayUniqueBy(arr, iteratee)).toEqual([{id: 1, name: 'A'}, {id: 2, name: 'B'}]);
  });

  test('should return unique numbers based on a transformation', () => {
    const arr = [1.1, 1.9, 2.2, 2.8, 3.0];
    const iteratee = (item) => Math.floor(item);
    expect(arrayUniqueBy(arr, iteratee)).toEqual([1.1, 2.2, 3.0]);
  });

  test('should return unique strings based on length', () => {
    const arr = ['apple', 'banana', 'cat', 'dog'];
    const iteratee = (item) => item.length;
    expect(arrayUniqueBy(arr, iteratee)).toEqual(['apple', 'banana', 'cat']);
  });

  test('should return an empty array if an empty array is provided', () => {
    expect(arrayUniqueBy([], (item) => item)).toEqual([]);
  });

  test('should return all elements if iteratee always returns unique keys', () => {
    const arr = [{id: 1}, {id: 2}, {id: 3}];
    expect(arrayUniqueBy(arr, (item) => item.id)).toEqual([{id: 1}, {id: 2}, {id: 3}]);
  });

  test('should handle iteratee returning null or undefined', () => {
    const arr = [{id: 1}, {id: null}, {id: 2}, {id: undefined}, {id: null}];
    expect(arrayUniqueBy(arr, (item) => item.id)).toEqual([{id: 1}, {id: null}, {id: 2}, {id: undefined}]);
  });
});
