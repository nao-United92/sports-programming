import unzipWith from './array-unzip-with-utils';

describe('unzipWith', () => {
  it('should unzip a zipped array with a given function', () => {
    const add = (a, b) => a + b;
    expect(unzipWith([[1, 10, 100], [2, 20, 200]], add)).toEqual([3, 30, 300]);
  });
});
