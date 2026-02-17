import arrayGroupBy from './array-group-by';

describe('arrayGroupBy', () => {
  test('should group elements by a function', () => {
    const arr = [{
      id: 1,
      name: 'apple'
    }, {
      id: 2,
      name: 'banana'
    }, {
      id: 3,
      name: 'apple'
    }];
    const groupByFn = (item) => item.name;
    expect(arrayGroupBy(arr, groupByFn)).toEqual({
      apple: [{
        id: 1,
        name: 'apple'
      }, {
        id: 3,
        name: 'apple'
      }],
      banana: [{
        id: 2,
        name: 'banana'
      }],
    });
  });

  test('should group elements by a property name', () => {
    const arr = [{
      id: 1,
      name: 'apple'
    }, {
      id: 2,
      name: 'banana'
    }, {
      id: 3,
      name: 'apple'
    }];
    expect(arrayGroupBy(arr, 'name')).toEqual({
      apple: [{
        id: 1,
        name: 'apple'
      }, {
        id: 3,
        name: 'apple'
      }],
      banana: [{
        id: 2,
        name: 'banana'
      }],
    });
  });

  test('should handle empty array', () => {
    const arr = [];
    const groupByFn = (item) => item.name;
    expect(arrayGroupBy(arr, groupByFn)).toEqual({});
  });

  test('should handle elements with undefined group key', () => {
    const arr = [{
      id: 1,
      name: 'apple'
    }, {
      id: 2
    }];
    const groupByFn = (item) => item.name;
    expect(arrayGroupBy(arr, groupByFn)).toEqual({
      apple: [{
        id: 1,
        name: 'apple'
      }],
      undefined: [{
        id: 2
      }],
    });
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => arrayGroupBy(null, 'name')).toThrow('Expected an array for the first argument.');
    expect(() => arrayGroupBy(undefined, 'name')).toThrow('Expected an array for the first argument.');
  });

  test('should throw an error if the second argument is not a function or string', () => {
    expect(() => arrayGroupBy([], null)).toThrow('Expected a function or a string for the second argument.');
    expect(() => arrayGroupBy([], 123)).toThrow('Expected a function or a string for the second argument.');
  });
});
