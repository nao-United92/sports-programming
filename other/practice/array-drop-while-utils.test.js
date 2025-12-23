const dropWhile = require('./array-drop-while-utils');

describe('dropWhile', () => {
  it('should drop elements while the predicate is true', () => {
    const users = [
      { 'user': 'barney',  'active': true },
      { 'user': 'fred',    'active': true },
      { 'user': 'pebbles', 'active': false }
    ];
    const result = dropWhile(users, o => o.active);
    expect(result).toEqual([{ 'user': 'pebbles', 'active': false }]);
  });

  it('should return the full array if the first element is false', () => {
    const users = [
      { 'user': 'barney',  'active': false },
      { 'user': 'fred',    'active': true }
    ];
    const result = dropWhile(users, o => o.active);
    expect(result).toEqual(users);
  });

  it('should return an empty array if all elements are true', () => {
    const users = [
      { 'user': 'barney',  'active': true },
      { 'user': 'fred',    'active': true }
    ];
    const result = dropWhile(users, o => o.active);
    expect(result).toEqual([]);
  });

  it('should return an empty array for an empty input array', () => {
    expect(dropWhile([], o => o.active)).toEqual([]);
  });
});
