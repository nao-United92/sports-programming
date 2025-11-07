import { dateRange } from './array-date-range-utils';

describe('dateRange', () => {
  it('should create a range of dates with a step of 1 day', () => {
    const startDate = new Date('2023-01-01');
    const endDate = new Date('2023-01-05');
    const expectedDates = [
      new Date('2023-01-01'),
      new Date('2023-01-02'),
      new Date('2023-01-03'),
      new Date('2023-01-04'),
      new Date('2023-01-05'),
    ];
    expect(dateRange(startDate, endDate)).toEqual(expectedDates);
  });

  it('should create a range of dates with a custom step', () => {
    const startDate = new Date('2023-01-01');
    const endDate = new Date('2023-01-05');
    const expectedDates = [
      new Date('2023-01-01'),
      new Date('2023-01-03'),
      new Date('2023-01-05'),
    ];
    expect(dateRange(startDate, endDate, 2)).toEqual(expectedDates);
  });

  it('should handle the same start and end date', () => {
    const startDate = new Date('2023-01-01');
    const endDate = new Date('2023-01-01');
    const expectedDates = [new Date('2023-01-01')];
    expect(dateRange(startDate, endDate)).toEqual(expectedDates);
  });

  it('should return an empty array if start date is after end date', () => {
    const startDate = new Date('2023-01-02');
    const endDate = new Date('2023-01-01');
    expect(dateRange(startDate, endDate)).toEqual([]);
  });
});
