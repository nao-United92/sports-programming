import partition from './array-partition-utils';

describe('partition', () => {
  it('should partition an array based on a function', () => {
    const users = [
      { 'user': 'barney',  'age': 36, 'active': false },
      { 'user': 'fred',    'age': 40, 'active': true },
      { 'user': 'pebbles', 'age': 1,  'active': false }
    ];
    expect(partition(users, o => o.active)).toEqual([
      [{ 'user': 'fred', 'age': 40, 'active': true }],
      [{ 'user': 'barney', 'age': 36, 'active': false }, { 'user': 'pebbles', 'age': 1, 'active': false }]
    ]);
  });
});
