import { parseCSV } from './csv-parser.js';

describe('parseCSV', () => {
  test('should parse a simple CSV string without header', () => {
    const csv = '1,2,3\n4,5,6';
    expect(parseCSV(csv)).toEqual([['1', '2', '3'], ['4', '5', '6']]);
  });

  test('should parse a CSV string with a header', () => {
    const csv = 'header1,header2\nvalue1,value2';
    expect(parseCSV(csv, ',', true)).toEqual([['value1', 'value2']]);
  });

  test('should handle different delimiters', () => {
    const csv = 'a;b;c\nd;e;f';
    expect(parseCSV(csv, ';')).toEqual([['a', 'b', 'c'], ['d', 'e', 'f']]);
  });

  test('should handle empty CSV string', () => {
    expect(parseCSV('')).toEqual([]);
    expect(parseCSV('   ')).toEqual([]);
  });

  test('should handle CSV with empty lines', () => {
    const csv = '1,2\n\n3,4';
    expect(parseCSV(csv)).toEqual([['1', '2'], [''], ['3', '4']]);
  });

  test('should return an empty array for non-string inputs', () => {
    expect(parseCSV(null)).toEqual([]);
    expect(parseCSV(undefined)).toEqual([]);
    expect(parseCSV(123)).toEqual([]);
  });
  
  test('should handle spaces around delimiters', () => {
    const csv = ' 1 , 2 , 3 \n 4 , 5 , 6 ';
    expect(parseCSV(csv)).toEqual([['1', '2', '3'], ['4', '5', '6']]);
  });
});
