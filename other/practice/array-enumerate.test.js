import { enumerate } from './array-enumerate.js';

describe('enumerate', () => {
  it('should return an array of [index, element] pairs', () => {
    const arr = ['a', 'b', 'c'];
    const expected = [
      [0, 'a'],
      [1, 'b'],
      [2, 'c'],
    ];
    expect(enumerate(arr)).toEqual(expected);
  });

  it('should return an empty array for an empty input array', () => {
    expect(enumerate([])).toEqual([]);
  });

  it('should handle arrays with various data types', () => {
    const arr = [1, 'hello', { id: 1 }];
    const expected = [
      [0, 1],
      [1, 'hello'],
      [2, { id: 1 }],
    ];
    expect(enumerate(arr)).toEqual(expected);
  });
});
