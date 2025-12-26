const {
  takeRightWhile
} = require('./array-take-right-while-utils');

describe('takeRightWhile', () => {
  const users = [{
    'user': 'barney',
    'active': false
  }, {
    'user': 'fred',
    'active': true
  }, {
    'user': 'pebbles',
    'active': true
  }];

  test('should take elements while the predicate is true', () => {
    const result = takeRightWhile(users, user => user.active);
    expect(result).toEqual([{
      'user': 'fred',
      'active': true
    }, {
      'user': 'pebbles',
      'active': true
    }]);
  });

  test('should return an empty array if the last element is not active', () => {
    const users2 = [...users, {
      'user': 'bam-bam',
      'active': false
    }];
    const result = takeRightWhile(users2, user => user.active);
    expect(result).toEqual([]);
  });

  test('should handle an empty array', () => {
    expect(takeRightWhile([], user => user.active)).toEqual([]);
  });
});