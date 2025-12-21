import keyBy from './array-key-by-utils';

describe('keyBy', () => {
  it('should create an object from an array of objects, using a key', () => {
    const array = [
      { 'dir': 'left', 'code': 97 },
      { 'dir': 'right', 'code': 100 }
    ];
    expect(keyBy(array, 'dir')).toEqual({
      'left': { 'dir': 'left', 'code': 97 },
      'right': { 'dir': 'right', 'code': 100 }
    });
  });
});
