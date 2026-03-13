const mergeDeepWithArrays = require('./object-merge-deep-arrays');

describe('mergeDeepWithArrays', () => {
  test('merges objects and concatenates arrays uniquely', () => {
    const obj1 = { tags: ['js', 'ts'], meta: { count: 1 } };
    const obj2 = { tags: ['ts', 'react'], meta: { version: '1.0' } };
    
    expect(mergeDeepWithArrays(obj1, obj2)).toEqual({
      tags: ['js', 'ts', 'react'],
      meta: { count: 1, version: '1.0' },
    });
  });

  test('merges with duplicates allowed', () => {
    const obj1 = { a: [1] };
    const obj2 = { a: [1, 2] };
    expect(mergeDeepWithArrays(obj1, obj2, { unique: false })).toEqual({ a: [1, 1, 2] });
  });

  test('handles nested object merging', () => {
    const obj1 = { user: { profile: { name: 'A' } } };
    const obj2 = { user: { profile: { age: 30 } } };
    expect(mergeDeepWithArrays(obj1, obj2)).toEqual({
      user: { profile: { name: 'A', age: 30 } },
    });
  });
});
