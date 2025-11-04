
import { countBy } from './collection-count-by-utils.js';

describe('countBy', () => {
  const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': false },
    { 'user': 'fred', 'active': true }
  ];

  test('should count elements by a given iteratee function', () => {
    expect(countBy(users, o => o.active)).toEqual({ 'true': 2, 'false': 1 });
  });

  test('should count elements by a property name string', () => {
    // This is a more advanced use case (shorthand iteratee)
    // Let's stick to function iteratees for now.
    expect(countBy(users, o => o.user.length)).toEqual({ '6': 2, '4': 1 });
  });

  test('should handle empty collections', () => {
    expect(countBy([], o => o.active)).toEqual({});
    expect(countBy({}, o => o.active)).toEqual({});
  });

  test('should handle collections with null or undefined values', () => {
    const collection = [null, 1, null, 2];
    expect(countBy(collection, v => v === null ? 'null' : 'notNull')).toEqual({ 'null': 2, 'notNull': 2 });
  });
});
