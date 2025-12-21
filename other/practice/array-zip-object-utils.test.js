import zipObject from './array-zip-object-utils';

describe('zipObject', () => {
  it('should create an object from two arrays', () => {
    expect(zipObject(['a', 'b'], [1, 2])).toEqual({ a: 1, b: 2 });
  });
});
