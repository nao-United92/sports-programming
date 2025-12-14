import intersectionBy from './array-intersection-by-utils';

describe('intersectionBy', () => {
  test('should return the intersection of two arrays based on a function', () => {
    const array1 = [{ x: 1 }, { x: 2 }];
    const array2 = [{ x: 2 }, { x: 3 }];
    expect(intersectionBy(array1, array2, o => o.x)).toEqual([{ x: 2 }]);
  });

  test('should work with different property values', () => {
    const array1 = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }];
    const array2 = [{ id: 2, name: 'c' }, { id: 3, name: 'd' }];
    expect(intersectionBy(array1, array2, o => o.id)).toEqual([{ id: 2, name: 'b' }]);
  });

  test('should return an empty array if there is no intersection', () => {
    const array1 = [{ x: 1 }];
    const array2 = [{ x: 2 }];
    expect(intersectionBy(array1, array2, o => o.x)).toEqual([]);
  });

  test('should work with empty arrays', () => {
    const array1 = [];
    const array2 = [{ x: 1 }];
    expect(intersectionBy(array1, array2, o => o.x)).toEqual([]);
    expect(intersectionBy(array2, array1, o => o.x)).toEqual([]);
  });
});
