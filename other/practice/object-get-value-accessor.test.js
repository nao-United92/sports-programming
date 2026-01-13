const { get } = require("./object-get-value-accessor");

describe("get", () => {
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
      },
    },
    f: null,
  };

  it("should retrieve a top-level property", () => {
    expect(get(obj, "a")).toBe(1);
  });

  it("should retrieve a nested property using dot notation", () => {
    expect(get(obj, "b.c")).toBe(2);
  });

  it("should retrieve a deeply nested property using dot notation", () => {
    expect(get(obj, "b.d.e")).toBe(3);
  });

  it("should retrieve a nested property using an array path", () => {
    expect(get(obj, ["b", "c"])).toBe(2);
  });

  it("should return undefined for a non-existent property", () => {
    expect(get(obj, "z")).toBeUndefined();
    expect(get(obj, "b.x")).toBeUndefined();
    expect(get(obj, "b.d.x")).toBeUndefined();
  });

  it("should return the default value for a non-existent property", () => {
    expect(get(obj, "z", "default")).toBe("default");
    expect(get(obj, "b.x", 0)).toBe(0);
  });

  it("should handle null or undefined objects gracefully", () => {
    expect(get(null, "a")).toBeUndefined();
    expect(get(undefined, "a")).toBeUndefined();
    expect(get(null, "a", "default")).toBe("default");
  });

  it("should return null if the path leads to null", () => {
    expect(get(obj, "f")).toBeNull();
  });

  it("should handle path through null intermediate values", () => {
    expect(get(obj, "f.g")).toBeUndefined();
    expect(get(obj, "f.g", "default")).toBe("default");
  });
});
