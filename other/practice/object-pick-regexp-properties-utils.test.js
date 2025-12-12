const pickRegExpProperties = require('./object-pick-regexp-properties-utils').default;

describe('pickRegExpProperties', () => {
  test('should pick only RegExp properties from an object', () => {
    const regex1 = /abc/i;
    const regex2 = new RegExp('\d+');
    const obj = {
      a: 1,
      b: regex1,
      c: 'hello',
      d: null,
      e: undefined,
      f: regex2,
      g: {},
      h: [1, 2],
    };
    expect(pickRegExpProperties(obj)).toEqual({ b: regex1, f: regex2 });
  });

  test('should return an empty object if no RegExp properties exist', () => {
    const obj = {
      a: 1,
      b: true,
      c: 'hello',
      d: null,
      e: undefined,
      g: {},
      h: [1, 2],
    };
    expect(pickRegExpProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is empty', () => {
    const obj = {};
    expect(pickRegExpProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(pickRegExpProperties(null)).toEqual({});
    expect(pickRegExpProperties(undefined)).toEqual({});
  });

  test('should handle an object with only RegExp properties', () => {
    const regex1 = /^start/i;
    const regex2 = /end$/;
    const obj = { pattern1: regex1, pattern2: regex2 };
    expect(pickRegExpProperties(obj)).toEqual({ pattern1: regex1, pattern2: regex2 });
  });

  test('should not modify the original object', () => {
    const originalRegex = /test/;
    const originalObj = { a: 1, b: originalRegex, c: 'text' };
    pickRegExpProperties(originalObj);
    expect(originalObj).toEqual({ a: 1, b: originalRegex, c: 'text' });
  });
});
