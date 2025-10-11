import { csvToArray } from './csv-to-array-utils.js';

describe('csvToArray', () => {
  test('should convert a simple CSV string to an array', () => {
    const csv = 'a,b,c\n1,2,3';
    expect(csvToArray(csv)).toEqual([['a', 'b', 'c'], ['1', '2', '3']]);
  });

  test('should handle quoted fields', () => {
    const csv = '"a,b",c\n"1,2",3';
    expect(csvToArray(csv)).toEqual([['a,b', 'c'], ['1,2', '3']]);
  });

  test('should handle escaped quotes', () => {
    const csv = '"a""b",c\n1,2,3';
    expect(csvToArray(csv)).toEqual([['a"b', 'c'], ['1', '2', '3']]);
  });

  test('should handle different delimiters', () => {
    const csv = 'a;b;c\n1;2;3';
    expect(csvToArray(csv, ';')).toEqual([['a', 'b', 'c'], ['1', '2', '3']]);
  });

  test('should handle empty lines', () => {
    const csv = 'a,b,c\n\n1,2,3';
    expect(csvToArray(csv)).toEqual([['a', 'b', 'c'], [], ['1', '2', '3']]);
  });
});
