import { groupBy } from './groupBy-utils';

describe('groupBy', () => {
  it('should group an array of objects by a key', () => {
    const array = [
      { category: 'fruit', name: 'apple' },
      { category: 'fruit', name: 'banana' },
      { category: 'vegetable', name: 'carrot' },
      { category: 'vegetable', name: 'potato' },
      { category: 'fruit', name: 'orange' },
    ];

    const grouped = groupBy(array, 'category');

    expect(grouped).toEqual({
      fruit: [
        { category: 'fruit', name: 'apple' },
        { category: 'fruit', name: 'banana' },
        { category: 'fruit', name: 'orange' },
      ],
      vegetable: [
        { category: 'vegetable', name: 'carrot' },
        { category: 'vegetable', name: 'potato' },
      ],
    });
  });

  it('should handle an empty array', () => {
    const array = [];
    const grouped = groupBy(array, 'category');
    expect(grouped).toEqual({});
  });

  it('should handle different data types as keys', () => {
    const array = [
      { id: 1, value: 'a' },
      { id: 2, value: 'b' },
      { id: 1, value: 'c' },
    ];

    const grouped = groupBy(array, 'id');

    expect(grouped).toEqual({
      '1': [
        { id: 1, value: 'a' },
        { id: 1, value: 'c' },
      ],
      '2': [{ id: 2, value: 'b' }],
    });
  });
});
