const { daysDiff, isToday, isLeapYear, formatDate } = require('./date-calculation-utils');

describe('Date Calculation Utilities', () => {
    describe('daysDiff', () => {
        it('should return 0 for the same calendar day regardless of time', () => {
            const date1 = new Date(2023, 0, 1, 10, 0, 0); // Jan 1, 10:00
            const date2 = new Date(2023, 0, 1, 20, 0, 0); // Jan 1, 20:00
            expect(daysDiff(date1, date2)).toBe(0);
        });

        it('should return 1 for consecutive days', () => {
            const date1 = new Date(2023, 0, 1);
            const date2 = new Date(2023, 0, 2);
            expect(daysDiff(date1, date2)).toBe(1);
        });

        it('should handle month changes', () => {
            const date1 = new Date(2023, 1, 25); // Feb 25
            const date2 = new Date(2023, 2, 5);  // Mar 5
            expect(daysDiff(date1, date2)).toBe(8); // 3 days in Feb + 5 in Mar
        });

        it('should handle year changes and leap years', () => {
            const date1 = new Date(2024, 1, 25); // Feb 25, 2024 (leap year)
            const date2 = new Date(2024, 2, 5);  // Mar 5
            expect(daysDiff(date1, date2)).toBe(9); // 4 days in Feb + 5 in Mar
        });

        it('should return the absolute difference', () => {
            const date1 = new Date(2023, 5, 10);
            const date2 = new Date(2023, 5, 1);
            expect(daysDiff(date1, date2)).toBe(9);
        });
    });

    describe('isToday', () => {
        it('should return true for today\'s date', () => {
            expect(isToday(new Date())).toBe(true);
        });

        it('should return false for a different date', () => {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            expect(isToday(yesterday)).toBe(false);
        });
    });

    describe('isLeapYear', () => {
        it('should return true for leap years', () => {
            expect(isLeapYear(2020)).toBe(true);
            expect(isLeapYear(2000)).toBe(true); // Divisible by 400
            expect(isLeapYear(2024)).toBe(true);
        });

        it('should return false for common years', () => {
            expect(isLeapYear(2019)).toBe(false);
            expect(isLeapYear(1900)).toBe(false); // Divisible by 100 but not by 400
            expect(isLeapYear(2021)).toBe(false);
        });

        it('should return false for non-number inputs', () => {
            expect(isLeapYear('2020')).toBe(false);
            expect(isLeapYear(null)).toBe(false);
        });
    });

    describe('formatDate', () => {
        it('should format a date object into YYYY-MM-DD string', () => {
            const specificDate = new Date(2023, 4, 21); // Month is 0-indexed (May 21)
            expect(formatDate(specificDate)).toBe('2023-05-21');
        });

        it('should pad month and day with a leading zero', () => {
            const date = new Date(2023, 0, 5); // January 5th
            expect(formatDate(date)).toBe('2023-01-05');
        });

        it('should handle invalid date objects', () => {
            expect(formatDate(new Date('invalid-date'))).toBe('NaN-NaN-NaN');
        });

        it('should return an empty string for non-date inputs', () => {
            expect(formatDate(null)).toBe('');
            expect(formatDate('2023-01-01')).toBe('');
        });
    });
});