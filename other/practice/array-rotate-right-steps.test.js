const rotateRightSteps = require('./array-rotate-right-steps');

describe('rotateRightSteps', () => {
  test('rotates right', () => {
    expect(rotateRightSteps([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
  });
});
