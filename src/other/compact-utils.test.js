import { compact } from './compact-utils';

describe('compact', () => {
  test('should remove all falsy values from an array', () => {
    const array = [0, 1, false, 2, '', 3, null, 4, undefined, 5, NaN];
    const compacted = compact(array);
    expect(compacted).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return an empty array if the input array is empty', () => {
    const array = [];
    const compacted = compact(array);
    expect(compacted).toEqual([]);
  });

  test('should return an empty array if all values are falsy', () => {
    const array = [0, false, '', null, undefined, NaN];
    const compacted = compact(array);
    expect(compacted).toEqual([]);
  });
});