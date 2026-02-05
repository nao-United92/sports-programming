const { dropRight } = require('./array-drop-trailing');

describe('dropRight', () => {
  it('should drop the last element by default', () => {
    expect(dropRight([1, 2, 3])).toEqual([1, 2]);
  });

  it('should drop the specified number of elements from the end', () => {
    expect(dropRight([1, 2, 3, 4, 5], 3)).toEqual([1, 2]);
  });

  it('should return an empty array if n is greater than array length', () => {
    expect(dropRight([1, 2, 3], 5)).toEqual([]);
  });

  it('should return the full array if n is 0', () => {
    const originalArr = [1, 2, 3];
    const result = dropRight(originalArr, 0);
    expect(result).toEqual([1, 2, 3]);
    expect(result).not.toBe(originalArr);
  });

  it('should handle an empty array', () => {
    expect(dropRight([])).toEqual([]);
  });
  
  it('should not modify the original array', () => {
    const originalArr = [1, 2, 3];
    dropRight(originalArr, 2);
    expect(originalArr).toEqual([1, 2, 3]);
  });

  it('should throw an error if not given an array', () => {
    expect(() => dropRight('not an array')).toThrow(TypeError);
  });
});
