const { mergeDeep } = require("./object-merge-deep-combiner");

describe("mergeDeep", () => {
  it("should deeply merge two objects", () => {
    const obj1 = {
      a: 1,
      b: {
        c: 2,
      },
    };
    const obj2 = {
      b: {
        d: 3,
      },
      e: 4,
    };
    expect(mergeDeep(obj1, obj2)).toEqual({
      a: 1,
      b: {
        c: 2,
        d: 3,
      },
      e: 4,
    });
  });

  it("should deeply merge multiple objects", () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { b: { d: 3 }, e: 4 };
    const obj3 = { f: 5, b: { g: 6 } };
    expect(mergeDeep(obj1, obj2, obj3)).toEqual({
      a: 1,
      b: { c: 2, d: 3, g: 6 },
      e: 4,
      f: 5,
    });
  });

  it("should overwrite non-object values", () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: "new_a", b: 3 };
    expect(mergeDeep(obj1, obj2)).toEqual({ a: "new_a", b: 3 });
  });

  it("should handle empty objects", () => {
    const obj1 = { a: 1 };
    const obj2 = {};
    expect(mergeDeep(obj1, obj2)).toEqual({ a: 1 });
    expect(mergeDeep({}, obj1)).toEqual({ a: 1 });
    expect(mergeDeep({}, {})).toEqual({});
  });

  it("should handle null and undefined values", () => {
    const obj1 = { a: 1, b: null };
    const obj2 = { b: undefined, c: 3 };
    expect(mergeDeep(obj1, obj2)).toEqual({ a: 1, b: undefined, c: 3 });
  });

  it("should not merge arrays, but overwrite them", () => {
    const obj1 = { a: [1, 2], b: 3 };
    const obj2 = { a: [3, 4] };
    expect(mergeDeep(obj1, obj2)).toEqual({ a: [3, 4], b: 3 });
  });
});
