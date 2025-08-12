import { partial } from './partial-practice.js';

describe('partial', () => {
  it('should partially apply arguments to a function', () => {
    const add = (a, b, c) => a + b + c;
    const add5 = partial(add, 5);

    expect(add5(1, 2)).toBe(8); // 5 + 1 + 2
    expect(add5(10, 20)).toBe(35); // 5 + 10 + 20
  });

  it('should apply multiple arguments', () => {
    const multiply = (a, b, c) => a * b * c;
    const multiplyBy2And3 = partial(multiply, 2, 3);

    expect(multiplyBy2And3(4)).toBe(24); // 2 * 3 * 4
  });

  it('should maintain the context', () => {
    const obj = {
      value: 10,
      add: function(a, b) {
        return this.value + a + b;
      },
    };
    const addPartial = partial(obj.add, 5);

    expect(addPartial.call(obj, 2)).toBe(17); // 10 + 5 + 2
  });
});
