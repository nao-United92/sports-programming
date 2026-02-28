const fromCSV = require('./array-from-csv');

test('converts csv to array of objects', () => {
  const csv = 'a,b\n"1","2"\n"3","4"';
  expect(fromCSV(csv)).toEqual([{ a: '1', b: '2' }, { a: '3', b: '4' }]);
});
