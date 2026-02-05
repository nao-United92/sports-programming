const { get } = require('./array-get-by-index');

describe('get', () => {
  const arr = ['a', 'b', 'c', 'd'];

  it('should get the element at the specified positive index', () => {
    expect(get(arr, 1)).toBe('b');
  });

  it('should get the element at the specified negative index from the end', () => {
    expect(get(arr, -1)).toBe('d');
    expect(get(arr, -3)).toBe('b');
  });

  it('should return undefined for an out-of-bounds positive index', () => {
    expect(get(arr, 10)).toBeUndefined();
  });

  it('should return undefined for an out-of-bounds negative index', () => {
    expect(get(arr, -10)).toBeUndefined();
  });

  it('should return undefined for an empty array', () => {
    expect(get([], 0)).toBeUndefined();
  });

  it('should throw an error if not given an array', () => {
    expect(() => get('not an array', 0)).toThrow(TypeError);
  });
});
