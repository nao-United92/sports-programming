import { pluckProperty } from './array-pluck-property.js';

test('pluckProperty extracts property values', () => {
  const users = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
  expect(pluckProperty(users, 'id')).toEqual([1, 2]);
  expect(pluckProperty(users, 'name')).toEqual(['A', 'B']);
});
