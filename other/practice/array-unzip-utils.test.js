import unzip from './array-unzip-utils';

describe('unzip', () => {
  it('should unzip a zipped array', () => {
    expect(unzip([['a', 1, true], ['b', 2, false]])).toEqual([['a', 'b'], [1, 2], [true, false]]);
  });
});
