import { formatTimeAgo } from './date-format-time-ago-utils.js';

describe('formatTimeAgo', () => {
  let mockDate;

  beforeAll(() => {
    // Mock current date to a fixed point for consistent testing
    mockDate = new Date('2023-10-27T10:00:00Z');
    // Temporarily store original Date constructor
    const OriginalDate = global.Date;
    global.Date = jest.fn((dateString) => {
      if (dateString) {
        return new OriginalDate(dateString);
      }
      return mockDate;
    });
    global.Date.now = jest.fn(() => mockDate.getTime());
  });

  afterAll(() => {
    // Restore original Date constructor
    global.Date = OriginalDate; // This line will cause an error if OriginalDate is not defined in this scope
  });

  // Re-defining OriginalDate here to ensure it's accessible in afterAll
  const OriginalDate = global.Date; // This will be the mocked Date, not the original

  // Corrected beforeAll and afterAll to properly mock and restore Date
  beforeAll(() => {
    mockDate = new Date('2023-10-27T10:00:00Z');
    const ActualDate = global.Date;
    global.Date = jest.fn((dateString) => {
      if (dateString) {
        return new ActualDate(dateString);
      }
      return mockDate;
    });
    global.Date.now = jest.fn(() => mockDate.getTime());
    // Store the actual Date constructor to restore later
    global.__ActualDate = ActualDate;
  });

  afterAll(() => {
    // Restore original Date constructor
    global.Date = global.__ActualDate;
    delete global.__ActualDate;
  });

  test('should format seconds correctly', () => {
    const date = new Date('2023-10-27T09:59:50Z'); // 10 seconds ago
    expect(formatTimeAgo(date)).toBe('10 seconds ago');
  });

  test('should format minutes correctly', () => {
    const date = new Date('2023-10-27T09:50:00Z'); // 10 minutes ago
    expect(formatTimeAgo(date)).toBe('10 minutes ago');
  });

  test('should format hours correctly', () => {
    const date = new Date('2023-10-27T08:00:00Z'); // 2 hours ago
    expect(formatTimeAgo(date)).toBe('2 hours ago');
  });

  test('should format days correctly', () => {
    const date = new Date('2023-10-25T10:00:00Z'); // 2 days ago
    expect(formatTimeAgo(date)).toBe('2 days ago');
  });

  test('should format months correctly', () => {
    const date = new Date('2023-08-27T10:00:00Z'); // 2 months ago
    expect(formatTimeAgo(date)).toBe('2 months ago');
  });

  test('should format years correctly', () => {
    const date = new Date('2021-10-27T10:00:00Z'); // 2 years ago
    expect(formatTimeAgo(date)).toBe('2 years ago');
  });

  test('should handle date string input', () => {
    expect(formatTimeAgo('2023-10-27T09:59:50Z')).toBe('10 seconds ago');
  });

  test('should handle timestamp input', () => {
    const timestamp = new Date('2023-10-27T09:59:50Z').getTime();
    expect(formatTimeAgo(timestamp)).toBe('10 seconds ago');
  });

  test('should return "Invalid Date" for invalid date input', () => {
    expect(formatTimeAgo('not a date')).toBe('Invalid Date');
    expect(formatTimeAgo(null)).toBe('Invalid Date');
    expect(formatTimeAgo(undefined)).toBe('Invalid Date');
  });
});
