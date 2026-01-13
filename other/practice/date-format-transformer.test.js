const { formatDate } = require("./date-format-transformer");

describe("formatDate", () => {
  const date = new Date(2024, 0, 20, 5, 8, 3);

  it("should format the date as YYYY-MM-DD", () => {
    expect(formatDate(date, "YYYY-MM-DD")).toBe("2024-01-20");
  });

  it("should format the date as YYYY/MM/DD hh:mm:ss", () => {
    expect(formatDate(date, "YYYY/MM/DD hh:mm:ss")).toBe(
      "2024/01/20 05:08:03"
    );
  });

  it("should format the date as DD-MM-YYYY", () => {
    expect(formatDate(date, "DD-MM-YYYY")).toBe("20-01-2024");
  });

  it("should handle different separators", () => {
    expect(formatDate(date, "hh:mm:ss")).toBe("05:08:03");
  });

  it("should throw an error if not a Date object", () => {
    expect(() => formatDate("not a date", "YYYY-MM-DD")).toThrow(
      "Expected a Date object."
    );
  });
});
