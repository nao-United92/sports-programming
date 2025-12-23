const pullAllBy = require('./array-pull-all-by-utils');

describe('pullAllBy', () => {
  it('should pull values from an array based on an iteratee', () => {
    const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
    pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], item => item.x);
    expect(array).toEqual([{ 'x': 2 }]);
  });

  it('should not modify the array if no values are pulled', () => {
    const array = [{ 'x': 1 }, { 'x': 2 }];
    pullAllBy(array, [{ 'x': 4 }], item => item.x);
    expect(array).toEqual([{ 'x': 1 }, { 'x': 2 }]);
  });

  it('should handle an empty values array', () => {
    const array = [{ 'x': 1 }, { 'x': 2 }];
    pullAllBy(array, [], item => item.x);
    expect(array).toEqual([{ 'x': 1 }, { 'x': 2 }]);
  });

  it('should handle an empty initial array', () => {
    const array = [];
    pullAllBy(array, [{ 'x': 1 }], item => item.x);
    expect(array).toEqual([]);
  });
});
