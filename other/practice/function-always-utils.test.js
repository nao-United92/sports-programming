import { functionAlways } from './function-always-utils';

describe('functionAlways', () => {
  test('creates a function that always returns value', () => {
    const object = { 'a': 1 };
    const alwaysObject = functionAlways(object);
    expect(alwaysObject()).toBe(object);
  });
});
