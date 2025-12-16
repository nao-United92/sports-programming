const compactExtended = require('./array-compact-utils-extended');

describe('compactExtended', () => {
  it('should remove all falsy values from an array', () => {
    const arr = [0, 1, false, 2, '', 3, null, 'a', undefined, NaN, ''];
    const expected = [1, 2, 3, 'a'];
    expect(compactExtended(arr)).toEqual(expected);
  });

  it('should return an empty array if the input array contains only falsy values', () => {
    const arr = [0, false, null, '', undefined, NaN];
    expect(compactExtended(arr)).toEqual([]);
  });

  it('should return the original array if it contains no falsy values', () => {
    const arr = [1, 'hello', true, {}, []];
    expect(compactExtended(arr)).toEqual([1, 'hello', true, {}, []]);
  });

  it('should return an empty array if the input is not an array', () => {
    expect(compactExtended(null)).toEqual([]);
    expect(compactExtended(undefined)).toEqual([]);
    expect(compactExtended(0)).toEqual([]);
    expect(compactExtended('')).toEqual([]);
    expect(compactExtended({})).toEqual([]);
  });

  it('should handle an empty array', () => {
    expect(compactExtended([])).toEqual([]);
  });
});
