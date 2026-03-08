import { symmetricDifferenceByProperty } from './array-symmetric-difference-by-property';

describe('symmetricDifferenceByProperty', () => {
  test('should return symmetric difference by property', () => {
    const arr1 = [{ id: 1 }, { id: 2 }];
    const arr2 = [{ id: 2 }, { id: 3 }];
    expect(symmetricDifferenceByProperty(arr1, arr2, 'id')).toEqual([{ id: 1 }, { id: 3 }]);
  });
});
