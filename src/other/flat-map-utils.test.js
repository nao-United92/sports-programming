import { flatMap } from './flat-map-utils.js';

describe('flatMap', () => {
  test('should map and flatten a collection', () => {
    const duplicate = (n) => [n, n];
    expect(flatMap([1, 2], duplicate)).toEqual([1, 1, 2, 2]);
  });

  test('should only flatten one level deep', () => {
    const duplicateAndWrap = (n) => [[n, n]];
    expect(flatMap([1, 2], duplicateAndWrap)).toEqual([[1, 1], [2, 2]]);
  });

  test('should work with functions that return single values', () => {
    const square = (n) => n * n;
    expect(flatMap([1, 2, 3], square)).toEqual([1, 4, 9]);
  });

  test('should work with an array of objects', () => {
    const users = [
      { 'user': 'barney', 'age': 36 },
      { 'user': 'fred',   'age': 40 }
    ];
    const getValues = (obj) => Object.values(obj);
    expect(flatMap(users, getValues)).toEqual(['barney', 36, 'fred', 40]);
  });

  test('should return an empty array for an empty collection', () => {
    expect(flatMap([], (x) => x)).toEqual([]);
  });

  test('should return an empty array for a null or undefined collection', () => {
    expect(flatMap(null, (x) => x)).toEqual([]);
    expect(flatMap(undefined, (x) => x)).toEqual([]);
  });
});