const { groupBy } = require("./array-group-by-grouper");

describe("groupBy", () => {
  const people = [
    { name: "Alice", age: 21 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 21 },
    { name: "David", age: 25 },
  ];

  it("should group an array of objects by a key", () => {
    const grouped = groupBy(people, "age");
    expect(grouped).toEqual({
      21: [
        { name: "Alice", age: 21 },
        { name: "Charlie", age: 21 },
      ],
      25: [
        { name: "Bob", age: 25 },
        { name: "David", age: 25 },
      ],
    });
  });

  it("should group an array of objects by a function", () => {
    const grouped = groupBy(people, (person) =>
      person.age > 22 ? "over 22" : "22 or under"
    );
    expect(grouped).toEqual({
      "22 or under": [
        { name: "Alice", age: 21 },
        { name: "Charlie", age: 21 },
      ],
      "over 22": [
        { name: "Bob", age: 25 },
        { name: "David", age: 25 },
      ],
    });
  });

  it("should return an empty object for an empty array", () => {
    expect(groupBy([], "age")).toEqual({});
  });

  it("should throw an error if not an array", () => {
    expect(() => groupBy("not an array", "key")).toThrow("Expected an array.");
  });
});
