
const uniqBy = require('./array-uniq-by-simple');

test('uniqBy should unique by property', () => {
  const data = [{ x: 1 }, { x: 2 }, { x: 1 }];
  expect(uniqBy(data, 'x')).toEqual([{ x: 1 }, { x: 2 }]);
});

test('uniqBy should unique by function', () => {
  expect(uniqBy([2.1, 1.2, 2.3], Math.floor)).toEqual([2.1, 1.2]);
});
