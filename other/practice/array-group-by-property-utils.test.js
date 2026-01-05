const arrayGroupByProperty = require('./array-group-by-property-utils');

describe('arrayGroupByProperty', () => {
  test('should group objects by a specified property', () => {
    const users = [{
      id: 1,
      type: 'admin'
    }, {
      id: 2,
      type: 'user'
    }, {
      id: 3,
      type: 'admin'
    }, {
      id: 4,
      type: 'user'
    }, ];
    const expected = {
      admin: [{
        id: 1,
        type: 'admin'
      }, {
        id: 3,
        type: 'admin'
      }, ],
      user: [{
        id: 2,
        type: 'user'
      }, {
        id: 4,
        type: 'user'
      }, ],
    };
    expect(arrayGroupByProperty(users, 'type')).toEqual(expected);
  });

  test('should handle objects with missing key gracefully (ignore them)', () => {
    const mixed = [{
      id: 1,
      type: 'admin'
    }, {
      id: 2
    }, {
      id: 3,
      type: 'admin'
    }, ];
    const expected = {
      admin: [{
        id: 1,
        type: 'admin'
      }, {
        id: 3,
        type: 'admin'
      }, ],
    };
    expect(arrayGroupByProperty(mixed, 'type')).toEqual(expected);
  });

  test('should handle non-object elements gracefully (ignore them)', () => {
    const mixed = [{
      type: 'A'
    }, null, 123, 'string', {
      type: 'B'
    }];
    const expected = {
      A: [{
        type: 'A'
      }],
      B: [{
        type: 'B'
      }],
    };
    expect(arrayGroupByProperty(mixed, 'type')).toEqual(expected);
  });

  test('should handle an empty array', () => {
    const emptyArray = [];
    expect(arrayGroupByProperty(emptyArray, 'type')).toEqual({});
  });

  test('should handle a key that does not exist in any object', () => {
    const users = [{
      id: 1,
      name: 'Alice'
    }, {
      id: 2,
      name: 'Bob'
    }, ];
    expect(arrayGroupByProperty(users, 'email')).toEqual({});
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => arrayGroupByProperty(null, 'name')).toThrow(TypeError);
    expect(() => arrayGroupByProperty(123, 'name')).toThrow(TypeError);
    expect(() => arrayGroupByProperty('string', 'name')).toThrow(TypeError);
  });

  test('should throw TypeError if key is not a string or symbol', () => {
    const users = [{
      id: 1,
      name: 'Alice'
    }];
    expect(() => arrayGroupByProperty(users, null)).toThrow(TypeError);
    expect(() => arrayGroupByProperty(users, 123)).toThrow(TypeError);
    expect(() => arrayGroupByProperty(users, {})).toThrow(TypeError);
  });
});
