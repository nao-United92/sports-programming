const noop = require('./function-noop-util');

describe('noop', () => {
  test('does nothing and returns undefined', () => {
    expect(noop()).toBeUndefined();
  });
});
