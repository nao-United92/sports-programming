const takeWhile = require('./array-take-while-utils');

describe('takeWhile', () => {
  it('should take elements while the predicate is true', () => {
    const users = [
      { 'user': 'barney',  'active': true },
      { 'user': 'fred',    'active': true },
      { 'user': 'pebbles', 'active': false }
    ];
    const result = takeWhile(users, o => o.active);
    expect(result).toEqual([
      { 'user': 'barney',  'active': true },
      { 'user': 'fred',    'active': true }
    ]);
  });

  it('should return an empty array if the first element is false', () => {
    const users = [
      { 'user': 'barney',  'active': false },
      { 'user': 'fred',    'active': true }
    ];
    const result = takeWhile(users, o => o.active);
    expect(result).toEqual([]);
  });

  it('should return the full array if all elements are true', () => {
    const users = [
      { 'user': 'barney',  'active': true },
      { 'user': 'fred',    'active': true }
    ];
    const result = takeWhile(users, o => o.active);
    expect(result).toEqual(users);
  });

  it('should return an empty array for an empty input array', () => {
    expect(takeWhile([], o => o.active)).toEqual([]);
  });
});
