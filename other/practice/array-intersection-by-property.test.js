import { intersectionByProperty } from './array-intersection-by-property';

describe('intersectionByProperty', () => {
  test('should return intersection by property', () => {
    const arr1 = [{ id: 1 }, { id: 2 }];
    const arr2 = [{ id: 2 }, { id: 3 }];
    expect(intersectionByProperty(arr1, arr2, 'id')).toEqual([{ id: 2 }]);
  });
});
