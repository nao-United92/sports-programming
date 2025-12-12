const { compact } = require('./array-compact-utils');

describe('compact', () => {
  test('should remove all falsy values from an array', () => {
    const array = [0, 1, false, 2, '', 3, null, 'a', undefined, NaN];
    const result = [1, 2, 3, 'a'];
    expect(compact(array)).toEqual(result);
  });

  test('should return an empty array if the input array is empty', () => {
    expect(compact([])).toEqual([]);
  });

  test('should return an empty array if the input is not an array', () => {
    expect(compact(null)).toEqual([]);
    expect(compact(undefined)).toEqual([]);
    expect(compact({})).toEqual([]);
  });

  test('should not remove truthy values', () => {
    const array = [1, 'hello', true, {}];
    expect(compact(array)).toEqual(array);
  });
});
