const curry = require('./fundamental-fn-curry');

test('fundamental-fn-curry', () => {
  const add = (a, b) => a + b;
  const curriedAdd = curry(add);
  expect(curriedAdd(1)(2)).toBe(3);
  expect(curriedAdd(1, 2)).toBe(3);
});
