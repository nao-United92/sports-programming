import { flatten } from './flatten-utils';

describe('flatten', () => {
  test('should flatten a nested array', () => {
    const array = [1, [2, [3, [4]], 5]];
    const flattened = flatten(array);
    expect(flattened).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return an empty array if the input array is empty', () => {
    const array = [];
    const flattened = flatten(array);
    expect(flattened).toEqual([]);
  });

  test('should not modify an already flat array', () => {
    const array = [1, 2, 3, 4, 5];
    const flattened = flatten(array);
    expect(flattened).toEqual([1, 2, 3, 4, 5]);
  });
});