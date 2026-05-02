const isWeekend = require('./fundamental-date-is-weekend');

test('fundamental-date-is-weekend', () => {
  expect(isWeekend(new Date('2026-04-25'))).toBe(true); // Saturday
  expect(isWeekend(new Date('2026-04-26'))).toBe(true); // Sunday
  expect(isWeekend(new Date('2026-04-27'))).toBe(false); // Monday
});
