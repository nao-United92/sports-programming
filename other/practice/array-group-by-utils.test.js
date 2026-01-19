import { groupBy } from "./array-group-by-utils.js";

describe("groupBy", () => {
  it("should group an array of objects by a string key", () => {
    const array = [
      { id: 1, category: "A" },
      { id: 2, category: "B" },
      { id: 3, category: "A" },
      { id: 4, category: "C" },
      { id: 5, category: "B" },
    ];
    const expected = {
      A: [
        { id: 1, category: "A" },
        { id: 3, category: "A" },
      ],
      B: [
        { id: 2, category: "B" },
        { id: 5, category: "B" },
      ],
      C: [{ id: 4, category: "C" }],
    };
    expect(groupBy(array, "category")).toEqual(expected);
  });

  it("should group an array of objects by a function", () => {
    const array = [
      { id: 1, value: 10 },
      { id: 2, value: 25 },
      { id: 3, value: 12 },
      { id: 4, value: 28 },
    ];
    const expected = {
      even: [
        { id: 1, value: 10 },
        { id: 3, value: 12 },
        { id: 4, value: 28 },
      ],
      odd: [{ id: 2, value: 25 }],
    };
    expect(groupBy(array, (item) => (item.value % 2 === 0 ? "even" : "odd"))).toEqual(expected);
  });

  it("should return an empty object for an empty array", () => {
    expect(groupBy([], "key")).toEqual({});
  });

  it("should throw an error if the first argument is not an array", () => {
    expect(() => groupBy("not an array", "key")).toThrow("The first argument must be an array.");
  });

  it("should throw an error if the key is not a string or a function", () => {
    expect(() => groupBy([], 123)).toThrow("The key must be a string or a function.");
  });
});
