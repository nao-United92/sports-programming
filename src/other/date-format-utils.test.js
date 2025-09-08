const assert = require('assert');
const { formatTime, formatDate } = require('./date-format-utils.js');

try {
  // formatTime tests (existing)
  assert.strictEqual(formatTime(new Date(2023, 0, 1, 9, 5, 0)), '9:05am');
  assert.strictEqual(formatTime(new Date(2023, 0, 1, 14, 30, 0)), '2:30pm');
  assert.strictEqual(formatTime(new Date(2023, 0, 1, 0, 0, 0)), '12:00am');
  assert.strictEqual(formatTime(new Date(2023, 0, 1, 12, 0, 0)), '12:00pm');

  // formatDate tests (new)
  assert.strictEqual(formatDate(new Date(2023, 0, 1)), '2023-01-01', 'formatDate basic');
  assert.strictEqual(formatDate(new Date(2023, 11, 31)), '2023-12-31', 'formatDate end of year');
  assert.strictEqual(formatDate(new Date(2024, 1, 29)), '2024-02-29', 'formatDate leap year');

  console.log('All date-format-utils tests passed!');
} catch (e) {
  console.error('date-format-utils tests failed:', e.message);
  process.exit(1);
}
