import formatDuration from './duration-formatter';

describe('formatDuration', () => {
  test('should format duration in seconds', () => {
    expect(formatDuration(1000)).toBe('1s');
    expect(formatDuration(30000)).toBe('30s');
  });

  test('should format duration in minutes and seconds', () => {
    expect(formatDuration(60000)).toBe('1m');
    expect(formatDuration(61000)).toBe('1m 1s');
    expect(formatDuration(125000)).toBe('2m 5s');
  });

  test('should format duration in hours, minutes, and seconds', () => {
    expect(formatDuration(3600000)).toBe('1h');
    expect(formatDuration(3601000)).toBe('1h 1s');
    expect(formatDuration(3661000)).toBe('1h 1m 1s');
    expect(formatDuration(7200000 + 120000 + 3000)).toBe('2h 2m 3s');
  });

  test('should format duration in days, hours, minutes, and seconds', () => {
    expect(formatDuration(86400000)).toBe('1d');
    expect(formatDuration(86400000 + 3600000 + 60000 + 1000)).toBe('1d 1h 1m 1s');
  });

  test('should handle zero duration', () => {
    expect(formatDuration(0)).toBe('0s');
  });

  test('should handle invalid input', () => {
    expect(formatDuration(null)).toBe('Invalid duration');
    expect(formatDuration(undefined)).toBe('Invalid duration');
    expect(formatDuration('abc')).toBe('Invalid duration');
    expect(formatDuration(-1000)).toBe('Invalid duration');
    expect(formatDuration(NaN)).toBe('Invalid duration');
  });

  test('should omit zero components in the middle', () => {
    expect(formatDuration(3600000 + 1000)).toBe('1h 1s'); // 1h 0m 1s -> 1h 1s
    expect(formatDuration(86400000 + 60000 + 1000)).toBe('1d 1m 1s'); // 1d 0h 1m 1s -> 1d 1m 1s
  });
});
