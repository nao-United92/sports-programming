import { isEmptyArray, lastElement, removeElementFromArray, uniqueArray, shuffle, flattenArray, sumArray, chunkArray, removeFalsy, contains, intersection, difference, removeDuplicates, groupBy, removeAllOccurrences, getAverage, range, compact, sample, pluck, zip, uniqueBy, partition, flattenDeep, union, shuffleArray } from './array-utils.js';

describe('array-utils', () => {
  describe('isEmptyArray', () => {
    it('should return true for an empty array', () => {
      expect(isEmptyArray([])).toBe(true);
    });

    it('should return false for a non-empty array', () => {
      expect(isEmptyArray([1, 2, 3])).toBe(false);
    });
  });

  describe('lastElement', () => {
    it('should return the last element of an array', () => {
      expect(lastElement([1, 2, 3])).toBe(3);
    });

    it('should return undefined for an empty array', () => {
      expect(lastElement([])).toBeUndefined();
    });
  });

  describe('removeElementFromArray', () => {
    it('should remove a specific element from an array', () => {
      expect(removeElementFromArray([1, 2, 3], 2)).toEqual([1, 3]);
    });
  });

  describe('shuffleArray', () => {
    it('should shuffle an array', () => {
      const arr = [1, 2, 3, 4, 5];
      const shuffled = shuffleArray([...arr]);
      expect(shuffled).not.toEqual(arr);
      expect(shuffled.sort()).toEqual(arr.sort());
      // Ensure the original array is not modified
      expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return an empty array when given an empty array', () => {
      expect(shuffleArray([])).toEqual([]);
    });

    it('should return a single element array when given a single element array', () => {
      expect(shuffleArray([1])).toEqual([1]);
    });

    it('should contain all original elements after shuffling', () => {
      const arr = [10, 20, 30, 40, 50];
      const shuffled = shuffleArray([...arr]);
      arr.forEach(element => {
        expect(shuffled).toContain(element);
      });
      expect(shuffled.length).toBe(arr.length);
    });
  });

  describe('uniqueArray', () => {
    it('should return an array with unique values', () => {
      expect(uniqueArray([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });
  });

  describe('shuffle', () => {
    it('should shuffle an array', () => {
      const arr = [1, 2, 3, 4, 5];
      const shuffled = shuffle([...arr]);
      expect(shuffled).not.toEqual(arr);
      expect(shuffled.sort()).toEqual(arr.sort());
    });
  });

  describe('flattenArray', () => {
    it('should flatten a nested array', () => {
      expect(flattenArray([1, [2, 3], [4, [5]]])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return an empty array for non-array inputs', () => {
      expect(flattenArray(null)).toEqual([]);
      expect(flattenArray(undefined)).toEqual([]);
      expect(flattenArray(123)).toEqual([]);
    });
  });

  describe('sumArray', () => {
    it('should calculate the sum of numbers in an array', () => {
      expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
    });

    it('should return 0 for an empty array', () => {
      expect(sumArray([])).toBe(0);
    });

    it('should return 0 for non-array inputs or arrays with non-numeric values', () => {
      expect(sumArray(null)).toBe(0);
      expect(sumArray(undefined)).toBe(0);
      expect(sumArray([1, 'a', 3])).toBe(0);
    });
  });

  describe('chunkArray', () => {
    it('should chunk an array into smaller arrays', () => {
      expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
      expect(chunkArray([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
      expect(chunkArray([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    });

    it('should return an empty array for invalid inputs', () => {
      expect(chunkArray([], 2)).toEqual([]);
      expect(chunkArray([1, 2, 3], 0)).toEqual([]);
      expect(chunkArray(null, 2)).toEqual([]);
      expect(chunkArray(undefined, 2)).toEqual([]);
    });
  });

  describe('removeFalsy', () => {
    it('should remove falsy values from an array', () => {
      expect(removeFalsy([1, 0, true, false, '', null, undefined, NaN, 'hello'])).toEqual([1, true, 'hello']);
      expect(removeFalsy([0, false, '', null, undefined, NaN])).toEqual([]);
    });

    it('should return an empty array for non-array inputs', () => {
      expect(removeFalsy(null)).toEqual([]);
      expect(removeFalsy(undefined)).toEqual([]);
      expect(removeFalsy(123)).toEqual([]);
    });
  });

  describe('contains', () => {
    it('should return true if the array contains the element', () => {
      expect(contains([1, 2, 3], 2)).toBe(true);
    });

    it('should return false if the array does not contain the element', () => {
      expect(contains([1, 2, 3], 4)).toBe(false);
    });

    it('should handle non-array inputs', () => {
      expect(contains(null, 1)).toBe(false);
      expect(contains(undefined, 1)).toBe(false);
    });
  });

  describe('intersection', () => {
    it('should return common elements between two arrays', () => {
      expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
      expect(intersection(['a', 'b'], ['b', 'c'])).toEqual(['b']);
      expect(intersection([1, 2], [3, 4])).toEqual([]);
    });

    it('should handle non-array inputs', () => {
      expect(intersection(null, [1, 2])).toEqual([]);
      expect(intersection([1, 2], undefined)).toEqual([]);
    });
  });

  describe('difference', () => {
    it('should return elements present in the first array but not in the second', () => {
      expect(difference([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
      expect(difference(['a', 'b', 'c'], ['b'])).toEqual(['a', 'c']);
      expect(difference([1, 2], [3, 4])).toEqual([1, 2]);
    });

    it('should handle non-array inputs', () => {
      expect(difference(null, [1, 2])).toEqual([]);
      expect(difference([1, 2], undefined)).toEqual([]);
    });
  });

  describe('removeDuplicates', () => {
    it('should remove duplicate values from an array', () => {
      expect(removeDuplicates([1, 1, 2, 3, 2, 4, 5, 5])).toEqual([1, 2, 3, 4, 5]);
      expect(removeDuplicates(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
      expect(removeDuplicates([])).toEqual([]);
    });

    it('should handle non-array inputs', () => {
      expect(removeDuplicates(null)).toEqual([]);
      expect(removeDuplicates(undefined)).toEqual([]);
    });
  });

  describe('groupBy', () => {
    it('should group an array of objects by a given key', () => {
      const arr = [
        { category: 'fruit', name: 'apple' },
        { category: 'vegetable', name: 'carrot' },
        { category: 'fruit', name: 'banana' },
      ];
      const grouped = groupBy(arr, 'category');
      expect(grouped).toEqual({
        fruit: [
          { category: 'fruit', name: 'apple' },
          { category: 'fruit', name: 'banana' },
        ],
        vegetable: [{ category: 'vegetable', name: 'carrot' }],
      });
    });

    it('should return an empty object for non-array inputs', () => {
      expect(groupBy(null, 'category')).toEqual({});
      expect(groupBy(undefined, 'category')).toEqual({});
    });
  });

  describe('removeAllOccurrences', () => {
    it('should remove all occurrences of a specific element', () => {
      expect(removeAllOccurrences([1, 2, 3, 2, 4, 2], 2)).toEqual([1, 3, 4]);
      expect(removeAllOccurrences(['a', 'b', 'a', 'c'], 'a')).toEqual(['b', 'c']);
      expect(removeAllOccurrences([1, 2, 3], 5)).toEqual([1, 2, 3]); // Element not found
      expect(removeAllOccurrences([], 1)).toEqual([]);
    });

    it('should return an empty array for non-array inputs', () => {
      expect(removeAllOccurrences(null, 1)).toEqual([]);
      expect(removeAllOccurrences(undefined, 1)).toEqual([]);
    });
  });

  describe('getAverage', () => {
    it('should calculate the average of numbers in an array', () => {
      expect(getAverage([1, 2, 3, 4, 5])).toBe(3);
      expect(getAverage([10, 20, 30])).toBe(20);
      expect(getAverage([5])).toBe(5);
    });

    it('should return NaN for an empty array', () => {
      expect(getAverage([])).toBeNaN();
    });

    it('should return NaN for non-array inputs or arrays with non-numeric values', () => {
      expect(getAverage(null)).toBeNaN();
      expect(getAverage(undefined)).toBeNaN();
      expect(getAverage([1, 'a', 3])).toBeNaN();
    });
  });

  describe('range', () => {
    it('should generate a range of numbers with default step', () => {
      expect(range(5)).toEqual([0, 1, 2, 3, 4]);
      expect(range(1, 5)).toEqual([1, 2, 3, 4]);
    });

    it('should generate a range of numbers with a custom step', () => {
      expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8]);
      expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
    });

    it('should generate a decreasing range', () => {
      expect(range(5, 1, -1)).toEqual([5, 4, 3, 2]);
      expect(range(10, 0, -2)).toEqual([10, 8, 6, 4, 2]);
    });

    it('should handle empty ranges', () => {
      expect(range(5, 5)).toEqual([]);
      expect(range(1, 0)).toEqual([]);
    });

    it('should handle non-numeric inputs gracefully', () => {
      expect(range('a', 5)).toEqual([]);
      expect(range(1, 'b')).toEqual([]);
    });
  });

  describe('compact', () => {
    it('should remove all falsey values from an array', () => {
      expect(compact([0, 1, false, 2, '', 3, null, undefined, NaN, 'a'])).toEqual([1, 2, 3, 'a']);
    });

    it('should return an empty array if all values are falsey', () => {
      expect(compact([0, false, '', null, undefined, NaN])).toEqual([]);
    });

    it('should return an empty array for non-array inputs', () => {
      expect(compact(null)).toEqual([]);
      expect(compact(undefined)).toEqual([]);
      expect(compact(123)).toEqual([]);
    });
  });

  describe('sample', () => {
    it('should return a random element from the array', () => {
      const arr = [1, 2, 3, 4, 5];
      const randomElement = sample(arr);
      expect(arr).toContain(randomElement);
    });

    it('should return undefined for an empty array', () => {
      expect(sample([])).toBeUndefined();
    });
  });

  describe('pluck', () => {
    it('should extract property values from an array of objects', () => {
      const arr = [{ a: 1 }, { a: 2 }, { a: 3 }];
      expect(pluck(arr, 'a')).toEqual([1, 2, 3]);
    });

    it('should return an array of undefined if key does not exist', () => {
      const arr = [{ a: 1 }, { b: 2 }];
      expect(pluck(arr, 'a')).toEqual([1, undefined]);
    });
  });

  describe('zip', () => {
    it('should zip arrays of the same length', () => {
      expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]]);
    });

    it('should zip arrays of different lengths', () => {
      expect(zip(['a', 'b', 'c'], [1, 2])).toEqual([['a', 1], ['b', 2]]);
    });

    it('should return an empty array if no arrays are provided', () => {
      expect(zip()).toEqual([]);
    });
  });

  describe('uniqueBy', () => {
    test('should return a unique array based on the iteratee function', () => {
      const arr = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 1, name: 'c' }];
      const uniqueArr = uniqueBy(arr, item => item.id);
      expect(uniqueArr).toEqual([{ id: 1, name: 'a' }, { id: 2, name: 'b' }]);
    });

    test('should handle primitive arrays with iteratee', () => {
      const arr = [1, 2, 2, 3, 1];
      const uniqueArr = uniqueBy(arr, item => item);
      expect(uniqueArr).toEqual([1, 2, 3]);
    });

    test('should return an empty array for an empty input array', () => {
      expect(uniqueBy([], item => item.id)).toEqual([]);
    });

    test('should handle non-array inputs gracefully', () => {
      expect(uniqueBy(null, item => item)).toEqual([]);
      expect(uniqueBy(undefined, item => item)).toEqual([]);
    });
  });

  describe('partition', () => {
    test('should partition an array based on a predicate', () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      const [even, odd] = partition(numbers, n => n % 2 === 0);
      expect(even).toEqual([2, 4, 6]);
      expect(odd).toEqual([1, 3, 5]);
    });

    test('should handle empty array', () => {
      const [truthy, falsy] = partition([], n => n > 0);
      expect(truthy).toEqual([]);
      expect(falsy).toEqual([]);
    });

    test('should handle all elements satisfying the predicate', () => {
      const [truthy, falsy] = partition([1, 2, 3], n => n > 0);
      expect(truthy).toEqual([1, 2, 3]);
      expect(falsy).toEqual([]);
    });

    test('should handle no elements satisfying the predicate', () => {
      const [truthy, falsy] = partition([-1, -2, -3], n => n > 0);
      expect(truthy).toEqual([]);
      expect(falsy).toEqual([-1, -2, -3]);
    });

    test('should handle non-array inputs gracefully', () => {
      const [truthy, falsy] = partition(null, n => n > 0);
      expect(truthy).toEqual([]);
      expect(falsy).toEqual([]);
    });
  });

  describe('flattenDeep', () => {
    test('should flatten an array to a specified depth', () => {
      expect(flattenDeep([1, [2, [3, [4]]]], 2)).toEqual([1, 2, 3, [4]]);
      expect(flattenDeep([1, [2, [3, [4]]]], 1)).toEqual([1, 2, [3, [4]]]);
      expect(flattenDeep([1, [2, [3, [4]]]], 0)).toEqual([1, [2, [3, [4]]]]);
    });

    test('should flatten completely if depth is Infinity', () => {
      expect(flattenDeep([1, [2, [3, [4]]]], Infinity)).toEqual([1, 2, 3, 4]);
    });

    test('should return an empty array for non-array inputs', () => {
      expect(flattenDeep(null)).toEqual([]);
      expect(flattenDeep(undefined)).toEqual([]);
      expect(flattenDeep(123)).toEqual([]);
    });

    test('should return an empty array if depth is negative', () => {
      expect(flattenDeep([1, [2]], -1)).toEqual([]);
    });
  });

  describe('union', () => {
    test('should return a union of multiple arrays', () => {
      expect(union([1, 2], [2, 3])).toEqual([1, 2, 3]);
      expect(union([1, 2, 3], [3, 4, 5], [5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    test('should handle empty arrays', () => {
      expect(union([], [1, 2])).toEqual([1, 2]);
      expect(union([1, 2], [])).toEqual([1, 2]);
      expect(union([], [])).toEqual([]);
    });

    test('should handle arrays with duplicate values within themselves', () => {
      expect(union([1, 1, 2], [2, 3, 3])).toEqual([1, 2, 3]);
    });

    test('should handle non-array inputs gracefully', () => {
      expect(union(null, [1, 2])).toEqual([1, 2]);
      expect(union([1, 2], undefined)).toEqual([1, 2]);
      expect(union(1, 2)).toEqual([]);
    });
  });

  describe('containsAll', () => {
    test('should return true if the array contains all elements', () => {
      expect(containsAll([1, 2, 3, 4, 5], [2, 4])).toBe(true);
      expect(containsAll(['a', 'b', 'c'], ['a', 'c'])).toBe(true);
      expect(containsAll([1, 2, 3], [])).toBe(true);
    });

    test('should return false if the array does not contain all elements', () => {
      expect(containsAll([1, 2, 3], [2, 5])).toBe(false);
      expect(containsAll(['a', 'b'], ['a', 'c'])).toBe(false);
    });

    test('should return false for non-array inputs', () => {
      expect(containsAll(null, [1])).toBe(false);
      expect(containsAll([1], undefined)).toBe(false);
      expect(containsAll(123, [1])).toBe(false);
    });
  });

  describe('isSorted', () => {
    test('should return true for a sorted array', () => {
      expect(isSorted([1, 2, 3, 4, 5])).toBe(true);
      expect(isSorted([1, 1, 2, 3])).toBe(true);
      expect(isSorted([])).toBe(true);
      expect(isSorted([1])).toBe(true);
    });

    test('should return false for an unsorted array', () => {
      expect(isSorted([3, 1, 2])).toBe(false);
      expect(isSorted([5, 4, 3, 2, 1])).toBe(false);
    });

    test('should return true for an empty array or single-element array', () => {
      expect(isSorted([])).toBe(true);
      expect(isSorted([1])).toBe(true);
    });

    test('should return false for non-array inputs', () => {
      expect(isSorted(null)).toBe(true);
      expect(isSorted(undefined)).toBe(true);
      expect(isSorted(123)).toBe(true);
    });
  });

  describe('sampleSize', () => {
    test('should return a random sample of specified size', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const sample = sampleSize(arr, 3);
      expect(sample.length).toBe(3);
      sample.forEach(element => expect(arr).toContain(element));
    });

    test('should return an empty array if n is 0 or less', () => {
      const arr = [1, 2, 3];
      expect(sampleSize(arr, 0)).toEqual([]);
      expect(sampleSize(arr, -1)).toEqual([]);
    });

    test('should return the entire array if n is greater than array length', () => {
      const arr = [1, 2, 3];
      const sample = sampleSize(arr, 5);
      expect(sample.length).toBe(3);
      expect(sample.sort()).toEqual(arr.sort());
    });

    test('should return an empty array for non-array inputs', () => {
      expect(sampleSize(null, 2)).toEqual([]);
      expect(sampleSize(undefined, 2)).toEqual([]);
      expect(sampleSize(123, 2)).toEqual([]);
    });
  });
});