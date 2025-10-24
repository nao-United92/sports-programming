
import { differenceWith } from './array-difference-with-utils';

describe('differenceWith', () => {
  const objects = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
  const others = [{'x': 1, 'y': 2}];

  const comparator = (a, b) => a.x === b.x && a.y === b.y;

  test('should return the difference of two arrays using a comparator', () => {
    expect(differenceWith(objects, others, comparator)).toEqual([{'x': 2, 'y': 1}]);
  });

  test('should return an empty array if all elements are common', () => {
    expect(differenceWith(objects, objects, comparator)).toEqual([]);
  });

  test('should return the first array if no common elements', () => {
    const otherObjects = [{'x': 3, 'y': 4}];
    expect(differenceWith(objects, otherObjects, comparator)).toEqual(objects);
  });

  test('should handle empty input arrays', () => {
    expect(differenceWith([], objects, comparator)).toEqual([]);
    expect(differenceWith(objects, [], comparator)).toEqual(objects);
    expect(differenceWith([], [], comparator)).toEqual([]);
  });

  test('should return empty array for invalid array input', () => {
    expect(differenceWith(null, others, comparator)).toEqual([]);
    expect(differenceWith(objects, null, comparator)).toEqual([]);
  });

  test('should return empty array for invalid comparator input', () => {
    expect(differenceWith(objects, others, null)).toEqual([]);
    expect(differenceWith(objects, others, undefined)).toEqual([]);
  });

  test('should work with different types of objects if comparator handles it', () => {
    const arr1 = [{id: 1, name: 'A'}, {id: 2, name: 'B'}];
    const arr2 = [{id: 2, name: 'C'}, {id: 3, name: 'D'}];
    const idComparator = (a, b) => a.id === b.id;
    expect(differenceWith(arr1, arr2, idComparator)).toEqual([{id: 1, name: 'A'}]);
  });
});
