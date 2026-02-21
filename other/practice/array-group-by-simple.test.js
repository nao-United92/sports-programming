
const groupBy = require('./array-group-by-simple');

test('groupBy should group by property', () => {
  const data = [{ a: 1, b: 2 }, { a: 1, b: 3 }, { a: 2, b: 2 }];
  expect(groupBy(data, 'a')).toEqual({
    1: [{ a: 1, b: 2 }, { a: 1, b: 3 }],
    2: [{ a: 2, b: 2 }]
  });
});

test('groupBy should group by function', () => {
  expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({
    4: [4.2],
    6: [6.1, 6.3]
  });
});
