import { pluck } from './array-pluck.js';

describe('pluck', () => {
  it('extracts a property from an array of objects', () => {
    const arr = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }];
    expect(pluck(arr, 'name')).toEqual(['Alice', 'Bob']);
  });

  it('handles missing properties as undefined', () => {
    const arr = [{ name: 'Alice' }, { age: 30 }];
    expect(pluck(arr, 'name')).toEqual(['Alice', undefined]);
  });

  it('returns empty array for empty input', () => {
    expect(pluck([], 'a')).toEqual([]);
  });
});
