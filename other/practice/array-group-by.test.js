import groupBy from './array-group-by';

describe('groupBy', () => {
  it('should group an array of objects by a key', () => {
    const arr = [
      { type: 'fruit', name: 'apple' },
      { type: 'vegetable', name: 'carrot' },
      { type: 'fruit', name: 'banana' },
      { type: 'vegetable', name: 'potato' },
    ];
    const grouped = groupBy(arr, 'type');
    expect(grouped).toEqual({
      fruit: [
        { type: 'fruit', name: 'apple' },
        { type: 'fruit', name: 'banana' },
      ],
      vegetable: [
        { type: 'vegetable', name: 'carrot' },
        { type: 'vegetable', name: 'potato' },
      ],
    });
  });

  it('should handle an empty array', () => {
    expect(groupBy([], 'type')).toEqual({});
  });

  it('should handle an array with no matching key', () => {
    const arr = [{ name: 'apple' }, { name: 'carrot' }];
    const grouped = groupBy(arr, 'type');
    expect(grouped).toEqual({
      undefined: [{ name: 'apple' }, { name: 'carrot' }],
    });
  });

  it('should group by a numeric key', () => {
    const arr = [
      { id: 1, value: 'a' },
      { id: 2, value: 'b' },
      { id: 1, value: 'c' },
    ];
    const grouped = groupBy(arr, 'id');
    expect(grouped).toEqual({
      '1': [
        { id: 1, value: 'a' },
        { id: 1, value: 'c' },
      ],
      '2': [{ id: 2, value: 'b' }],
    });
  });
});
