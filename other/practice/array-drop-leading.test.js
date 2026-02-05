const { drop } = require('./array-drop-leading');

describe('drop', () => {
  it('should drop the first element by default', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });

  it('should drop the specified number of elements', () => {
    expect(drop([1, 2, 3, 4, 5], 3)).toEqual([4, 5]);
  });

  it('should return an empty array if n is greater than array length', () => {
    expect(drop([1, 2, 3], 5)).toEqual([]);
  });

  it('should return the full array if n is 0', () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    expect(drop([])).toEqual([]);
  });
  
  it('should not modify the original array', () => {
    const originalArr = [1, 2, 3];
    drop(originalArr, 2);
    expect(originalArr).toEqual([1, 2, 3]);
  });

  it('should throw an error if not given an array', () => {
    expect(() => drop('not an array')).toThrow(TypeError);
  });
});
