const { deepClone } = require("./object-deep-clone-copier");

describe("deepClone", () => {
  it("should create a deep clone of a simple object", () => {
    const obj = { a: 1, b: "hello" };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });

  it("should create a deep clone of a nested object", () => {
    const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj.b.d).not.toBe(obj.b.d);
  });

  it("should create a deep clone of an array", () => {
    const arr = [1, 2, [3, 4]];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr[2]).not.toBe(arr[2]);
  });

  it("should handle null and undefined values", () => {
    const obj = { a: null, b: undefined };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
  });

  it("should handle Date objects", () => {
    const date = new Date();
    const obj = { a: date };
    const clonedObj = deepClone(obj);
    expect(clonedObj.a).toEqual(date);
    expect(clonedObj.a).not.toBe(date);
  });
});
