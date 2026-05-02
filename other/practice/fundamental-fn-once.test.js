const once = require('./fundamental-fn-once');

test('fundamental-fn-once', () => {
  let counter = 0;
  const increment = once(() => ++counter);
  expect(increment()).toBe(1);
  expect(increment()).toBe(1);
  expect(counter).toBe(1);
});
