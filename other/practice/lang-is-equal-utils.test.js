const { isEqual } = require('./lang-is-equal-utils');

describe('isEqual', () => {
  it('should return true for identical primitive values', () => {
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual('a', 'a')).toBe(true);
    expect(isEqual(true, true)).toBe(true);
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, undefined)).toBe(true);
  });

  it('should return false for different primitive values', () => {
    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual('a', 'b')).toBe(false);
    expect(isEqual(true, false)).toBe(false);
    expect(isEqual(null, undefined)).toBe(false);
  });

  it('should return true for identical objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(isEqual(obj1, obj2)).toBe(true);
  });

  it('should return false for different objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 3 } };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  it('should return true for identical arrays', () => {
    const arr1 = [1, { a: 2 }, [3, 4]];
    const arr2 = [1, { a: 2 }, [3, 4]];
    expect(isEqual(arr1, arr2)).toBe(true);
  });

  it('should return false for different arrays', () => {
    const arr1 = [1, { a: 2 }, [3, 4]];
    const arr2 = [1, { a: 2 }, [3, 5]];
    expect(isEqual(arr1, arr2)).toBe(false);
    expect(isEqual([1, 2], [1, 2, 3])).toBe(false);
  });

  it('should handle dates', () => {
    const date1 = new Date('2023-01-01');
    const date2 = new Date('2023-01-01');
    const date3 = new Date('2023-01-02');
    expect(isEqual(date1, date2)).toBe(true);
    expect(isEqual(date1, date3)).toBe(false);
  });

  it('should handle regex', () => {
    const reg1 = /abc/gi;
    const reg2 = /abc/gi;
    const reg3 = /def/gi;
    expect(isEqual(reg1, reg2)).toBe(true);
    expect(isEqual(reg1, reg3)).toBe(false);
  });
});
