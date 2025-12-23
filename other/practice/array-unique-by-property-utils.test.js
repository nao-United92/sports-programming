const uniqueByProperty = require('./array-unique-by-property-utils');

describe('uniqueByProperty', () => {
  test('should return unique objects based on a specified property', () => {
    const arr = [{
      id: 1,
      name: 'a'
    }, {
      id: 2,
      name: 'b'
    }, {
      id: 1,
      name: 'c'
    }, {
      id: 3,
      name: 'd'
    }, {
      id: 2,
      name: 'e'
    }, ];
    expect(uniqueByProperty(arr, 'id')).toEqual([{
      id: 1,
      name: 'a'
    }, {
      id: 2,
      name: 'b'
    }, {
      id: 3,
      name: 'd'
    }, ]);
  });

  test('should return unique objects based on a string property', () => {
    const arr = [{
      type: 'fruit',
      name: 'apple'
    }, {
      type: 'vegetable',
      name: 'carrot'
    }, {
      type: 'fruit',
      name: 'banana'
    }, ];
    expect(uniqueByProperty(arr, 'type')).toEqual([{
      type: 'fruit',
      name: 'apple'
    }, {
      type: 'vegetable',
      name: 'carrot'
    }, ]);
  });

  test('should handle cases where no duplicates exist', () => {
    const arr = [{
      id: 1
    }, {
      id: 2
    }, {
      id: 3
    }];
    expect(uniqueByProperty(arr, 'id')).toEqual([{
      id: 1
    }, {
      id: 2
    }, {
      id: 3
    }]);
  });

  test('should return an empty array for an empty input array', () => {
    expect(uniqueByProperty([], 'id')).toEqual([]);
  });

  test('should return an empty array if prop is undefined or null', () => {
    const arr = [{
      id: 1
    }];
    expect(uniqueByProperty(arr, undefined)).toEqual([]);
    expect(uniqueByProperty(arr, null)).toEqual([]);
    expect(uniqueByProperty(arr, '')).toEqual([]);
  });

  test('should return an empty array if input is not an array', () => {
    expect(uniqueByProperty(null, 'id')).toEqual([]);
    expect(uniqueByProperty(undefined, 'id')).toEqual([]);
    expect(uniqueByProperty({}, 'id')).toEqual([]);
    expect(uniqueByProperty('string', 'id')).toEqual([]);
  });

  test('should handle objects with missing property', () => {
    const arr = [{
      id: 1,
      name: 'a'
    }, {
      name: 'b'
    }, {
      id: 2,
      name: 'c'
    }];
    expect(uniqueByProperty(arr, 'id')).toEqual([{
      id: 1,
      name: 'a'
    }, {
      id: 2,
      name: 'c'
    }]);
  });

  test('should handle property value being undefined', () => {
    const arr = [{
      id: 1,
      value: 'a'
    }, {
      id: 2,
      value: undefined
    }, {
      id: 3,
      value: 'b'
    }, {
      id: 4,
      value: undefined
    }, ];
    expect(uniqueByProperty(arr, 'value')).toEqual([{
      id: 1,
      value: 'a'
    }, {
      id: 2,
      value: undefined
    }, {
      id: 3,
      value: 'b'
    }, ]);
  });
});
