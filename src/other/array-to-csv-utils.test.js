import { arrayToCsv } from './array-to-csv-utils.js';

describe('arrayToCsv', () => {
  test('should convert a simple array to a CSV string', () => {
    const arr = [['a', 'b', 'c'], ['1', '2', '3']];
    const expected = 'a,b,c\n1,2,3';
    expect(arrayToCsv(arr)).toBe(expected);
  });

  test('should handle a different delimiter', () => {
    const arr = [['a', 'b', 'c'], ['1', '2', '3']];
    const expected = 'a;b;c\n1;2;3';
    expect(arrayToCsv(arr, ';')).toBe(expected);
  });

  test('should handle fields containing the delimiter', () => {
    const arr = [['a,b', 'c'], ['1', '2']];
    const expected = '"a,b",c\n1,2';
    expect(arrayToCsv(arr)).toBe(expected);
  });

  test('should handle fields containing double quotes', () => {
    const arr = [['a"b', 'c'], ['1', '2']];
    const expected = '"a""b",c\n1,2';
    expect(arrayToCsv(arr)).toBe(expected);
  });

  test('should handle fields containing newlines', () => {
    const arr = [['a\nb', 'c'], ['1', '2']];
    const expected = '"a\nb",c\n1,2';
    expect(arrayToCsv(arr)).toBe(expected);
  });
});
