import { arrayToCSV } from './array-to-csv-string.js';

test('arrayToCSV converts to CSV', () => {
  const data = [{ a: 1, b: 2 }, { a: 3, b: 4 }];
  expect(arrayToCSV(data)).toBe('a,b\n1,2\n3,4');
});
