const toCSV = require('./array-to-csv');

test('converts array to csv', () => {
  const data = [{ a: 1, b: 2 }, { a: 3, b: 4 }];
  expect(toCSV(data, ['a', 'b'])).toBe('a,b\n"1","2"\n"3","4"');
});
