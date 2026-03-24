const fillWithFunction = require('./array-fill-with-function');

describe('fillWithFunction', () => {
  test('fills with function', () => {
    const arr = [0, 0, 0];
    fillWithFunction(arr, i => i + 1);
    expect(arr).toEqual([1, 2, 3]);
  });
});
