import { formatInTimezone, convertTimezone } from './timezone-utils.js';

describe('Timezone Utilities', () => {
  describe('formatInTimezone', () => {
    const date = new Date('2023-10-27T10:00:00Z'); // UTC time

    it('should format a date for a given timezone', () => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      expect(formatInTimezone(date, 'America/New_York', options)).toBe('October 27, 2023');
    });

    it('should format time correctly in a different timezone', () => {
      const options = { hour: 'numeric', minute: 'numeric', hour12: true };
      // 10:00 UTC is 6:00 AM in New York (EDT)
      expect(formatInTimezone(date, 'America/New_York', options)).toBe('6:00 AM');
      // 10:00 UTC is 7:00 PM in Tokyo (JST)
      expect(formatInTimezone(date, 'Asia/Tokyo', options)).toBe('7:00 PM');
    });

    it('should return null for an invalid timezone', () => {
      expect(formatInTimezone(date, 'Invalid/Timezone')).toBeNull();
    });
  });

  describe('convertTimezone', () => {
    const date = new Date('2023-10-27T10:00:00Z'); // 10:00 UTC

    it('should convert a date to a different timezone', () => {
      // 10:00 UTC to New York (EDT is UTC-4)
      const nyDate = convertTimezone(date, 'America/New_York');
      // The new date object will represent 6:00 AM UTC
      expect(nyDate.getUTCHours()).toBe(6);

      // 10:00 UTC to Tokyo (JST is UTC+9)
      const tokyoDate = convertTimezone(date, 'Asia/Tokyo');
      // The new date object will represent 7:00 PM UTC
      expect(tokyoDate.getUTCHours()).toBe(19);
    });

    it('should return null for an invalid timezone', () => {
      expect(convertTimezone(date, 'Invalid/Timezone')).toBeNull();
    });
  });
});
