import { arrayRepeat } from './array-repeat';

describe('arrayRepeat', () => {
  it('should repeat each element n times', () => {
    expect(arrayRepeat([1, 2], 3)).toEqual([1, 1, 1, 2, 2, 2]);
    expect(arrayRepeat(['a', 'b'], 2)).toEqual(['a', 'a', 'b', 'b']);
  });

  it('should return an empty array if n is 0', () => {
    expect(arrayRepeat([1, 2, 3], 0)).toEqual([]);
  });

  it('should return an empty array if the input array is empty', () => {
    expect(arrayRepeat([], 5)).toEqual([]);
  });

  it('should handle single element arrays', () => {
    expect(arrayRepeat([10], 4)).toEqual([10, 10, 10, 10]);
  });

  it('should maintain order of elements', () => {
    const original = ['apple', 'banana', 'cherry'];
    const repeated = arrayRepeat(original, 2);
    expect(repeated).toEqual(['apple', 'apple', 'banana', 'banana', 'cherry', 'cherry']);
  });

  it('should throw TypeError if first argument is not an array', () => {
    expect(() => arrayRepeat(null, 2)).toThrow(TypeError);
    expect(() => arrayRepeat(undefined, 2)).toThrow(TypeError);
    expect(() => arrayRepeat('string', 2)).toThrow(TypeError);
    expect(() => arrayRepeat({}, 2)).toThrow(TypeError);
  });

  it('should throw TypeError if second argument is not a non-negative integer', () => {
    expect(() => arrayRepeat([1], -1)).toThrow(TypeError);
    expect(() => arrayRepeat([1], 1.5)).toThrow(TypeError);
    expect(() => arrayRepeat([1], '2')).toThrow(TypeError);
    expect(() => arrayRepeat([1], null)).toThrow(TypeError);
    expect(() => arrayRepeat([1], undefined)).toThrow(TypeError);
  });
});
