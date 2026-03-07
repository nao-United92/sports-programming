const mapRange = require('./math-map-range-utils');

describe('mapRange', () => {
  test('maps 5 from range 0-10 to 0-100', () => {
    expect(mapRange(5, 0, 10, 0, 100)).toBe(50);
  });

  test('maps 0.5 from range 0-1 to 100-200', () => {
    expect(mapRange(0.5, 0, 1, 100, 200)).toBe(150);
  });

  test('maps value correctly even if ranges are reversed', () => {
    expect(mapRange(2, 0, 10, 100, 0)).toBe(80);
  });
});
